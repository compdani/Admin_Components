<script setup>
import { ref, watch, onMounted } from 'vue';
import { VAceEditor } from 'vue3-ace-editor';
import 'ace-builds';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-chrome';
import 'ace-builds/src-noconflict/worker-json';

const props = defineProps({
    modelValue: {
        type: Object,
        required: true
    }
});
const emit = defineEmits(['update:modelValue']);
const tempJson = ref('');

watch(tempJson, (newVal) => {
    try {
        emit('update:modelValue', JSON.parse(newVal));
    } catch (e) {
        console.log(e);
    }
});

onMounted(() => {
    tempJson.value = JSON.stringify(props.modelValue, null, 2);
});
</script>
<template>
    <v-ace-editor 
        v-model:value="tempJson" 
        lang="json" 
        theme="chrome" 
        style="height: 600px"
        :options="{
            useWorker: true,
            showPrintMargin: false,
            fontSize: 14
        }"
    />
</template>