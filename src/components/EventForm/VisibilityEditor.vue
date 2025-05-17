<script setup>
const current = defineModel();
import { inject } from 'vue';
const event_form = inject('event_form');
const fields = event_form.visibility_fields;
console.log(fields);
</script>

<template>
	<v-expansion-panel title="Visibility">
		<v-expansion-panel-text>
	    <v-row>
          <v-checkbox v-for="field in fields" :key="field.name" :color="field.color" v-model="current[field.id]" :label="field.label"></v-checkbox>
	    </v-row>
	</v-expansion-panel-text>
	</v-expansion-panel>
</template>