<script setup>
import { ref, onBeforeUnmount,inject } from 'vue';
import TreeNode from './TreeNode.vue';
import ContextMenu from '@imengyu/vue3-context-menu'
import { registerInsertOptions, useComponentOptions } from '../../lib/ComponentTypes';
const data = defineModel('data');
const { removeElement, pasteElement, insertElement } = useComponentOptions(data);
const emit = defineEmits(['openEdit', 'close', 'update:docked']);

// Use the clipboard store
const clipboard = inject('componentClipboard');

// Reference to tree nodes
const treeNodes = ref([]);

// Expand all nodes
function expandAll() {
  treeNodes.value.forEach(node => {
    if (node) {
      node.isExpanded = true;
      expandNodeChildren(node);
    }
  });
}

// Collapse all nodes
function collapseAll() {
  treeNodes.value.forEach(node => {
    if (node) {
      node.isExpanded = false;
      collapseNodeChildren(node);
    }
  });
}

// Helper function to expand children recursively
function expandNodeChildren(node) {
  if (node.$refs.treeNodes) {
    node.$refs.treeNodes.forEach(childNode => {
      if (childNode) {
        childNode.isExpanded = true;
        expandNodeChildren(childNode);
      }
    });
  }
}

// Helper function to collapse children recursively
function collapseNodeChildren(node) {
  if (node.$refs.treeNodes) {
    node.$refs.treeNodes.forEach(childNode => {
      if (childNode) {
        childNode.isExpanded = false;
        collapseNodeChildren(childNode);
      }
    });
  }
}


function openEdit(event, index) {
  let newPath = event.path ? [index, ...event.path] : [index];

  const menuItems = [
    {
      label: "Edit",
      onClick: () => {
        emit('openEdit', { element: event.element, path: newPath });
      },
    }
  ];

  // Add clipboard operations
  menuItems.push(
    {
      label: "Cut",
      onClick: () => {
        clipboard.cut(event.element, newPath);
        if (clipboard.isCut) {
          removeElement(newPath);
        }
      }
    },
    {
      label: "Copy",
      onClick: () => {
        clipboard.copy(event.element, newPath);
      }
    }
  );

  // Add paste options if clipboard has content
  if (clipboard.hasContent()) {
    menuItems.push({
      label: "Paste",
      children: [
        {
          label: "Paste as Prepend",
          onClick: () => pasteElement(newPath, 'prepend')
        },
        {
          label: "Paste as Append",
          onClick: () => pasteElement(newPath, 'append')
        },
        {
          label: "Paste as Child",
          onClick: () => pasteElement(newPath, 'child')
        }
      ]
    });
  }

  // Add insert options with common components
  menuItems.push(registerInsertOptions(insertElement, newPath));

  ContextMenu.showContextMenu({
    x: event.event.x,
    y: event.event.y,
    zIndex: 1001,
    items: menuItems
  });
}





// Position state for the floating window
const pos = ref({ top: 20, left: 20 });
const isDocked = ref(false);
let isDragging = false;
let offset = { x: 0, y: 0 };

function toggleDock() {
  isDocked.value = !isDocked.value;
  emit('update:docked', isDocked.value);
  if (isDocked.value) {
    pos.value = { top: 0, right: 0, bottom: 0 };
  } else {
    pos.value = { top: 20, left: 20 };
  }
}

function onMouseDown(e) {
  if (isDocked.value) return;
  isDragging = true;
  offset.x = e.clientX - pos.value.left;
  offset.y = e.clientY - pos.value.top;
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}

function onMouseMove(e) {
  if (!isDragging) return;
  pos.value.left = e.clientX - offset.x;
  pos.value.top = e.clientY - offset.y;
}

function onMouseUp() {
  isDragging = false;
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
}

// Clean up if component unmounts while dragging
onBeforeUnmount(() => {
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
});
</script>
<template>
  <div class="floating-tree-viewer" :class="{ 'docked': isDocked }"
    :style="isDocked ? pos : { top: pos.top + 'px', left: pos.left + 'px' }">
    <div class="header" @mousedown="onMouseDown">
      <span>JSON Tree Viewer</span>
      <div class="header-buttons">
        <v-btn icon density="compact" @click="expandAll" title="Expand All">
          <v-icon>fa-solid fa-angle-double-down</v-icon>
        </v-btn>
        <v-btn icon density="compact" @click="collapseAll" title="Collapse All">
          <v-icon>fa-solid fa-angle-double-up</v-icon>
        </v-btn>
        <v-btn icon density="compact" @click="toggleDock">
          <v-icon>{{ isDocked ? 'fa-solid fa-arrow-left' : 'fa-solid fa-arrow-right' }}</v-icon>
        </v-btn>
        <v-btn icon density="compact" @click="$emit('close')">x</v-btn>
      </div>
    </div>
    <div class="content">
      <TreeNode v-for="(node, index) in data" :node="node" label="root" @open-edit="e => openEdit(e, index)"
        ref="treeNodes" />
    </div>
  </div>
</template>
<style scoped>
.floating-tree-viewer {
  position: absolute;
  width: 300px;
  max-height: 80vh;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 8px;
  z-index: 1000;
}

.floating-tree-viewer.docked {
  position: absolute;
  width: 300px;
  height: 100%;
  max-height: none;
  border-radius: 0;
  border-left: 1px solid #ccc;
  top: 0;
  right: 0;
  bottom: 0;
  box-shadow: none;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  margin-bottom: 8px;
  padding-bottom: 4px;
  cursor: move;
}

.header-buttons {
  display: flex;
  gap: 4px;
}

.content {
  font-size: 12px;
}
</style>