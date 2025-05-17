<script setup>
import { ref, watch, onMounted } from 'vue';
import { VAceEditor } from 'vue3-ace-editor';
import ace from 'ace-builds';
import themeChromeUrl from 'ace-builds/src-noconflict/theme-chrome?url';
import workerjsonurl from 'ace-builds/src-noconflict/worker-json?url';
import modeJsonUrl from 'ace-builds/src-noconflict/mode-json';

ace.config.setModuleUrl('ace/theme/chrome', themeChromeUrl);
ace.config.setModuleUrl('ace/mode/json_worker', workerjsonurl);
ace.config.setModuleUrl('ace/mode/json', modeJsonUrl);

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
    />
</template>