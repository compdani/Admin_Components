<template>
  <!-- Stop propagation on the entire node so that only the deepest node's contextmenu is handled -->
  <div class="tree-node">
    <div class="node-label" @contextmenu.stop="e => rootEmit(e, props.node)">
      <span v-if="hasAnyChildren" class="expand-icon" @click="toggleExpand">
        <i :class="isExpanded ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-right'"></i>
      </span>
      {{ computedLabel }}
      <span v-if="nodeContent" class="node-content"> - {{ nodeContent }}</span>
    </div>
    <div class="children" v-if="hasAnyChildren && isExpanded">
      <!-- Render children if they exist -->
      <div v-if="hasChildren">
        <TreeNode v-for="(child, index) in props.node.children" :key="'child-' + index" :node="child"
          :label="child.component || ('[' + index + ']')" @openEdit="e => childEditHandler(e, index)" ref="treeNodes" />
      </div>
      <!-- Render slots if they exist -->
      <div v-if="hasSlots" class="slots">
        <div v-for="(slotItem, index) in props.node.slots" :key="'slot-' + index" class="slot-label"
          @contextmenu.stop="e => slotEmit(e, slotItem, index)">
          Slot: {{ slotItem.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import TreeNode from './TreeNode.vue'; // recursive import

const props = defineProps({
  node: {
    type: [Object, Array],
    required: true
  },
  label: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['openEdit']);

// Add isExpanded state
const isExpanded = ref(true);

// Toggle expansion
function toggleExpand() {
  isExpanded.value = !isExpanded.value;
}

// Expose isExpanded state and treeNodes refs
defineExpose({
  isExpanded,
  treeNodes: ref([])
});

// When a node is right-clicked, emit its own event.
function rootEmit(event, node) {
  event.preventDefault();
  emit('openEdit', { event, element: node, path: [] });
}

// When a child node emits an event, add the current child index to its path before re‑emitting.
function childEditHandler(payload, index) {
  // If payload.path is already set, we assume it came from a deeper level.
  const newPath = ['children', index, ...payload.path];
  emit('openEdit', {
    event: payload.event,
    element: payload.element,
    path: newPath
  });
}

function slotEmit(event, node, index) {
  event.preventDefault();
  const newPath = ['slots', index];
  emit('openEdit', { event, element: node, path: newPath });
}

const isObject = computed(() => Object.prototype.toString.call(props.node) === '[object Object]');

const computedLabel = computed(() => {
  if (isObject.value && props.node.component) return props.node.component;
  return props.label;
});

const nodeContent = computed(() => {
  if (isObject.value) {
    if (props.node.textContent) return props.node.textContent;
    if (props.node.htmlContent) return '[HTML content]';
  }
  return '';
});

const hasChildren = computed(() =>
  isObject.value && Array.isArray(props.node.children) && props.node.children.length > 0
);
const hasSlots = computed(() =>
  isObject.value && Array.isArray(props.node.slots) && props.node.slots.length > 0
);
const hasAnyChildren = computed(() => hasChildren.value || hasSlots.value);
</script>

<style scoped>
.tree-node {
  margin-left: 10px;
  border-left: 1px dashed #ccc;
  padding-left: 8px;
  margin-top: 4px;
}

.node-label {
  font-weight: bold;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.expand-icon {
  cursor: pointer;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.expand-icon:hover {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 2px;
}

.node-content {
  font-weight: normal;
  font-style: italic;
  color: #999;
  margin-left: 4px;
}

.children {
  margin-top: 4px;
}

.slot-label {
  font-style: italic;
  color: #555;
  margin-left: 10px;
}
</style>