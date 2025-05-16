<script setup>
import { watch, ref } from 'vue';
import GeneralComponentEditing from './GeneralComponentEditing.vue';
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
const newData = ref(props.data);
const emits = defineEmits(['dataSaved']);
const dialog = defineModel('dialog');
const type = ref('');
watch(dialog, (newVal) => {
    if (newVal && props.data.hasOwnProperty('component')) {
        type.value = props.data?.component;
    
        newData.value = JSON.parse(JSON.stringify(props.data));
    }else if (newVal && props.data.hasOwnProperty('name')) {
        type.value = 'slot';
        newData.value = JSON.parse(JSON.stringify(props.data));
    }
});
const close = () => {
    dialog.value = false;
    type.value = '';
    newData.value = {};
}
</script>
<template>
<v-dialog v-model="dialog" max-width="800px" :retain-focus="false">
    <v-card :title="'Editing: ' + type ">
  
        <v-card-text v-if="type != ''">
            <GeneralComponentEditing v-model="newData" :is_component="type != 'slot'" />
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red" @click="close">Cancel</v-btn>
            <v-btn color="green" @click="$emit('dataSaved', newData)">Save</v-btn>
        </v-card-actions>
        <template #append>
            <v-btn class="close-btn" variant="text" @click="close">
                <v-icon>fa-solid fa-xmark</v-icon>
            </v-btn>
        </template>
    </v-card>
</v-dialog>
</template>
<style scoped>
.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #000;
    background-color: transparent;
    border: none;
    cursor: pointer;
}
.close-btn:hover {
    color: #f00;
}
.close-btn:focus {
    outline: none;
}
.close-btn:active {
    transform: scale(0.95);
}

</style>