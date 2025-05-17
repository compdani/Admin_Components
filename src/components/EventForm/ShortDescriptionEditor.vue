<script setup>
import Editor from "@tinymce/tinymce-vue";
import { shortDesConfi } from '../../lib/EditorConfigs.js';

const shortdescription = defineModel();
</script>

<template>
	<v-expansion-panel title="Short Description" value="description">
		<v-expansion-panel-text>
	    <editor api-key="74ca372jx03ojgry4czoi2g59d4pruuozmudnvfqwzs742yz" id="shortdescription" :init="shortDesConfi"
	      v-model="shortdescription" />
		</v-expansion-panel-text>
	</v-expansion-panel>
</template>
