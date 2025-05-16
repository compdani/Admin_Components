<script setup>
import draggable from 'vuedraggable'
import JsonComponents from './JsonComponents.vue';
import Editor from "@tinymce/tinymce-vue";
import { shortDesConfi } from '../../lib/EditorConfigs';
const apiKey = "74ca372jx03ojgry4czoi2g59d4pruuozmudnvfqwzs742yz";
const sections = defineModel();
const emit = defineEmits(['updateSections', 'openEdit']);
const props = defineProps({
  draggable_pro: {
    type: Boolean,
    default: true
  }
});


function getComponent(componentName) {
  const componentMap = {
  };
  // Return the async component if found, otherwise return the component name as-is
  if (componentMap[componentName]) {
    return (componentMap[componentName]);
  }
  // If no component is found, return the name (assumes global registration or default component)
  return componentName;
}
function endofDrag() {
  emit('updateSections', sections.value);
}

function openContextMenu(e, element, index) {
  emit('openEdit', { event: e, element, path: [index] });
}

// Function to handle sub-element editing
function subElementEdit(returnData, index, parent, childOrSlot) {
  let newPath = [];

  if (parent !== null) {
    newPath.push(parent);
  }
  if (index !== null) {
    newPath.push(index);
  }

  if (childOrSlot === 'children') {
    newPath.push('children');
    if (returnData.path) {
      newPath = [...newPath, ...returnData.path];
    }
  } else if (childOrSlot === 'slot') {
    //if returnData has path the add children if not do not add
    if (returnData.path) {
      newPath.push('slots', index, 'children');
      newPath = [...newPath, ...returnData.path];
    } else {
      newPath.push('slots', index);
    }
  }
  emit('openEdit', {
    event: returnData.event,
    element: returnData.element,
    path: newPath
  });
}

function openSlotMenu(e, element, parent, index) {
  emit('openEdit', { event: e, element: element.slots[index], path: [parent, 'slots', index] });
}
</script>
<template>
  <template v-for="(section, index) in sections" v-if="!draggable_pro">
    <component :is="getComponent(section.component)" v-bind="section.props" @contextmenu.stop="(e) => openContextMenu(e, section, index)">
      <template v-if="section.children">
        <JsonComponents v-model="section.children" :draggable_pro="draggable_pro"
          @openEdit="e => subElementEdit(e, null, index, 'children')"></JsonComponents>
      </template>
      <div v-if="section.htmlContent" v-html="section.htmlContent"></div>
      <template v-if="section.textContent">{{ section.textContent }}</template>
      <!--Add Slots-->
      <template v-for="(slot, inx) in section.slots" v-slot:[slot.name]>
        <JsonComponents v-model="slot.children" v-if="slot.children" :draggable_pro="draggable_pro"
          @openEdit="e => subElementEdit(e, inx, index, 'slot')"></JsonComponents>
        <div v-if="slot.htmlContent" v-html="slot.htmlContent"
          @contextmenu.stop="(e) => openSlotMenu(e, section, index, inx)"></div>
          <template v-if="slot.textContent">{{ slot.textContent }}</template>
      </template>
    </component>
  </template>

  <draggable v-model="sections" :animation="200" item-key="id" @end="endofDrag" v-else>
    <template #item="{ element, index }">
      <div class="component-item" @contextmenu.stop="(e) => openContextMenu(e, element, index)">
        <!-- Render your component; adjust as needed -->
        <component :is="getComponent(element.component)" v-bind="element.props"
          v-if="!element.hasOwnProperty('htmlContent') || element.hasOwnProperty('children') || element.hasOwnProperty('slots')">
          <JsonComponents v-if="element.children" v-model="element.children" @updateSections="endofDrag"
            @openEdit="e => subElementEdit(e, null, index, 'children')" :draggable="draggable_pro"></JsonComponents>
          <Editor v-if="element.hasOwnProperty('htmlContent')" :api-key="apiKey" :init="shortDesConfi"
            v-model="element.htmlContent" />
          <span v-if="element.textContent" contenteditable="true"
            @input="element.textContent = $event.target.innerText">{{ element.textContent }}</span>
          <!--Add Slots-->
          <template v-for="(slot, inx) in element.slots" v-slot:[slot.name]>
            <JsonComponents v-model="slot.children" v-if="slot.children" @updateSections="endofDrag"
              :draggable="draggable_pro" @openEdit="e => subElementEdit(e, inx, index, 'slot')"></JsonComponents>
            <Editor v-if="slot.hasOwnProperty('htmlContent')" :api-key="apiKey" :init="shortDesConfi"
              v-model="slot.htmlContent" />
            <span v-if="slot.textContent" contenteditable="true" @input="slot.textContent = $event.target.innerText">{{
              slot.textContent }}</span>
          </template>
        </component>
        <component :is="getComponent(element.component)" v-bind="element.props" v-else>
          <Editor :api-key="apiKey" :init="shortDesConfi" v-model="element.htmlContent" />
        </component>
      </div>
    </template>
  </draggable>
</template>
<style scoped>
.component-item {
  border: 1px dashed #ccc;
  background: #fff;
  cursor: grab;
}
</style>