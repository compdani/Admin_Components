<script setup>
import { inject } from 'vue'
import { ref } from "vue";
import JsonComponents from './ComponentElement/JsonComponents.vue';
import ComponentElementEdit from './ComponentElement/ComponentElementEdit.vue';
import { component_types } from "../lib/EditorConfigs";
import { registerInsertOptions, useComponentOptions } from '../lib/ComponentTypes';
import FloatingTreeViewer from './ComponentElement/FloatingTreeViewer.vue';
import { commonComponents } from '../lib/ComponentTypes';
import ContextMenu from '@imengyu/vue3-context-menu';
import AceEditorWrap from './ComponentElement/AceEditorWrap.vue';

const clipboard = inject('componentClipboard');
const componentAddDialog = ref(false), component_temp = ref({
    component: "",
    props: {},
}), componentEditDialog = ref(false), showTreeViewer = ref(false), isTreeDocked = ref(false);

const showJson = ref(false), draggable = ref(false), componentPath = ref([]), componentName = ref("");
const json = defineModel({default: []});

const { removeElement, pasteElement, insertElement } = useComponentOptions(json);

// Function to copy a common component to clipboard
function copyCommonComponent(component) {
    clipboard.copy(component, null);
}

function updateSection(section) {
    const temp = [...json.value];
    const index = componentPath.value.pop();
    const parent = componentPath.value.reduce((acc, curr) => acc[curr], temp);
    if (parent) {
        parent[index] = section;
    }
    json.value = temp;
    componentEditDialog.value = false;
    component_temp.value = {
    };
    componentPath.value = [];
}

function openEditorModal({ element, path }) {
    componentPath.value = path;
    componentEditDialog.value = true;
    component_temp.value = element;
}

const updateSections = (sections) => {
    json.value = sections;
}

function addComponent() {
    if (componentName.value === "") {
        alert("Please select a component");
        return;
    }
    json.value.push({
        component: componentName.value,
        props: {}
    });
    componentAddDialog.value = false;
    componentName.value = "";
}

function showContextMenu(e, element, path) {
    if (!e) return; // Return early if no event object

    e.preventDefault();
    const menuItems = [
        {
            label: "Edit",
            onClick: () => {
                openEditorModal({ element, path });
            },
        },
        {
            label: "Cut",
            onClick: () => {
                clipboard.cut(element, path);
                if (clipboard.isCut) {
                    removeElement(path);
                }
            }
        },
        {
            label: "Copy",
            onClick: () => {
                clipboard.copy(element, path);
            }
        }
    ];

    // Add paste options if clipboard has content
    if (clipboard.hasContent()) {
        menuItems.push({
            label: "Paste",
            children: [
                {
                    label: "Paste as Prepend",
                    onClick: () => pasteElement(path, 'prepend')
                },
                {
                    label: "Paste as Append",
                    onClick: () => pasteElement(path, 'append')
                },
                {
                    label: "Paste as Child",
                    onClick: () => pasteElement(path, 'child')
                }
            ]
        });
    }

    // Add insert options
    menuItems.push(registerInsertOptions(insertElement, path));

    menuItems.push({
        label: "Delete",
        onClick: () => {
            removeElement(path);
        }
    });

    ContextMenu.showContextMenu({
        x: e.x,
        y: e.y,
        items: menuItems
    });
}
</script>
<template>
    <div id="content-editor">
        <v-toolbar class="mb-2">
            <v-btn :active="showJson" @click="showJson = !showJson" icon="fa-solid fa-code"></v-btn>
            <v-btn :active="draggable" @click="draggable = !draggable">Draggable</v-btn>
            <v-btn @click="componentAddDialog = true" icon="fa-solid fa-plus"></v-btn>
            <v-btn @click="showTreeViewer = !showTreeViewer" icon="fa-solid fa-tree"></v-btn>
            <v-spacer></v-spacer>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" icon="fa-solid fa-clipboard"></v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="item in commonComponents" :key="item.title" @click="copyCommonComponent(item)">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar>
        <v-row>
            <v-col :cols="12" v-if="showJson">
                <AceEditorWrap v-model="json" />
            </v-col>
            <v-col v-else :cols="12" class="bordered">
                <div class="preview-container">
                    <div class="preview-content" :class="{ 'has-docked-tree': showTreeViewer && isTreeDocked }">
                        <JsonComponents v-model="json" @updateSections="updateSections" :draggable_pro="draggable"
                            @openEdit="({ event, element, path }) => showContextMenu(event, element, path)">
                        </JsonComponents>
                    </div>
                    <FloatingTreeViewer v-if="showTreeViewer" v-model:data="json" @close="showTreeViewer = false"
                        @openEdit="openEditorModal" @update:docked="isTreeDocked = $event" />
                </div>
            </v-col>
        </v-row>
        <v-dialog v-model="componentAddDialog" max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Add Component</span>
                </v-card-title>
                <v-card-text>
                    <v-combobox :items="component_types" v-model="componentName" label="Component Name"></v-combobox>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="red" @click="componentAddDialog = false">Cancel</v-btn>
                    <v-btn @click="addComponent" color="primary">Add</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <ComponentElementEdit :data="component_temp" v-model:dialog="componentEditDialog" @dataSaved="updateSection" />
    </div>
</template>
<style>
#content-editor {
    position: relative;
}

.bordered {
    border: 1px dotted #ccc;
    position: relative;
}

.preview-container {
    position: relative;
    height: 100%;
    display: flex;
}

.preview-content.has-docked-tree {
    margin-right: 300px;
}

.preview-content {
    flex: 1;
    min-width: 0;
}

.reset-list-style {
    :where(main ol, main ul) {
        margin-inline-start: 0;
        padding-inline-start: 40px;
    }
}
</style>