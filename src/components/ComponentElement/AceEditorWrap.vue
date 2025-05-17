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

onMounted(async () => {
    try {
        // Dynamically import ace modules
        await Promise.all([
            import('ace-builds/src-noconflict/ace'),
            import('ace-builds/src-noconflict/mode-json'),
            import('ace-builds/src-noconflict/theme-chrome'),
            import('ace-builds/src-noconflict/worker-json')
        ]);
        
        // Initialize the editor value
        tempJson.value = JSON.stringify(props.modelValue, null, 2);
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
    <v-ace-editor 
        v-model:value="tempJson" 
        lang="json" 
        theme="chrome" 
        style="height: 600px"
        :options="editorOptions"
        @init="editor = $event"
    />
</template>