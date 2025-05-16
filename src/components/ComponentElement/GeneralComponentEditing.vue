<script setup>
import { ref } from "vue";
import { emailBodyConfig } from '../../lib/EditorConfigs';

const apiKey = "74ca372jx03ojgry4czoi2g59d4pruuozmudnvfqwzs742yz";
import Editor from "@tinymce/tinymce-vue";
const properties = defineModel();
const props = defineProps({
    is_component: {
        type: Boolean,
        default: true
    }
});
const prop_types = {
    "class": "text-field",
    "style": "text-field",
    "id": "text-field",
    "title": "text-field",
    "href": "text-field",
    "target": {
        "type": "select",
        "enum": [
            "_blank",
            "_self",
            "_parent",
            "_top"
        ]
    },
    "color": {
        "type": "select",
        "enum": [
            "red",
            "green",
            "blue",
            "yellow",
            "purple",
            "pink",
            "orange",
            "brown",
            "grey",
            "black",
            "white"
        ]
    }
}
function addNewProp() {
    const newProp = prompt("Enter new prop name:");
    if (properties.value.props === undefined) {
        properties.value.props = {};
    }
    if (newProp) {
        properties.value.props[newProp] = "";
    }
}
</script>
<template>
    <v-text-field v-model="properties.component" label="Component" type="text" v-if="is_component"></v-text-field>
    <v-text-field v-model="properties.name" label="Name" type="text" v-else></v-text-field>
    <!--props goes here, props are an object in properties.props -->
    <template v-for="(val, key) in properties.props" :key="key">
        <component v-if="typeof (prop_types[key]) === 'string' && prop_types[key] !== 'htmlContent'"
            :is="'v-' + prop_types[key]" v-model="properties.props[key]" :label="key">
            <template #append>
                <v-btn variant="text" color="red" @click="() => { delete properties.props[key] }"
                    icon="fa-solid fa-xmark" />
            </template>
        </component>
        <v-select v-else-if="prop_types[key]?.type === 'select'" v-model="properties.props[key]" :label="key"
            :items="prop_types[key].enum">
            <template #append>
                <v-btn variant="text" color="red" @click="() => { delete properties.props[key] }"
                    icon="fa-solid fa-xmark" />
            </template>
        </v-select>
        <v-text-field v-else v-model="properties.props[key]" :label="key" type="text">
            <template #append>
                <v-btn variant="text" color="red" @click="() => { delete properties.props[key] }"
                    icon="fa-solid fa-xmark" />
            </template>
        </v-text-field>
    </template>
    <Editor v-if="properties.hasOwnProperty('htmlContent')" v-model="properties.htmlContent" :init="emailBodyConfig"
        :api-key="apiKey" />
    <v-textarea v-if="properties.hasOwnProperty('textContent')" v-model="properties.textContent" label="Text Content"
        type="text">
        <template #prepend>
            <v-icon>fa-solid fa-text-width</v-icon>
        </template>
    </v-textarea>
    <v-btn-group variant="text">
        <v-btn v-if="properties.hasOwnProperty('htmlContent')" color="red"
            @click="() => { delete properties.htmlContent }">Delete htmlContent</v-btn>
        <v-btn v-else color="green" @click="() => { properties.htmlContent = '' }">Add htmlContent</v-btn>
        <v-btn v-if="properties.hasOwnProperty('textContent')" color="red"
            @click="() => { delete properties.textContent }">Delete textContent</v-btn>
        <v-btn v-else color="green" @click="() => { properties.textContent = '' }">Add textContent</v-btn>
        <v-btn color="green" @click="addNewProp">Add New Prop</v-btn>
    </v-btn-group>
</template>
<style scoped>
.tox-tinymce-aux {
    z-index: 999999!important;
}
</style>