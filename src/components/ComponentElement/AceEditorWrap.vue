<script setup>
import { ref, watch, onMounted, shallowRef } from 'vue';
import { VAceEditor } from 'vue3-ace-editor';

const props = defineProps({
    modelValue: {
        type: Object,
        required: true
    }
});
const emit = defineEmits(['update:modelValue']);
const tempJson = ref('');
const editor = shallowRef(null);
const isEditorReady = ref(false);

onMounted(async () => {
    try {
        // Load Ace editor from CDN
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.23.0/ace.js';
        script.async = true;
        
        script.onload = () => {
            // Load required Ace modules
            const ace = window.ace;
            ace.require('ace/mode/json');
            ace.require('ace/theme/chrome');
            ace.require('ace/worker/json');
            
            // Initialize the editor value
            tempJson.value = JSON.stringify(props.modelValue, null, 2);
            isEditorReady.value = true;
        };
        
        document.head.appendChild(script);
    } catch (error) {
        console.error('Failed to initialize Ace editor:', error);
    }
});

watch(tempJson, (newVal) => {
    try {
        emit('update:modelValue', JSON.parse(newVal));
    } catch (e) {
        console.log(e);
    }
});

const editorOptions = {
    useWorker: true,
    showPrintMargin: false,
    fontSize: 14,
    tabSize: 2,
    showGutter: true,
    highlightActiveLine: true
};
</script>
<template>
    <div v-if="isEditorReady">
        <v-ace-editor 
            v-model:value="tempJson" 
            lang="json" 
            theme="chrome" 
            style="height: 600px"
            :options="editorOptions"
            @init="editor = $event"
        />
    </div>
    <div v-else class="editor-loading">
        Loading editor...
    </div>
</template>

<style scoped>
.editor-loading {
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 4px;
}
</style>