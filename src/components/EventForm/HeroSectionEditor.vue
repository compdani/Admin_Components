<script setup>

const hero = defineModel("hero");
</script>
<template>
	<v-expansion-panel>
		<v-expansion-panel-title>Hero Section</v-expansion-panel-title>
		<v-expansion-panel-text>
	    <v-row>
	      <v-col cols="12" sm="6">
	        <v-text-field label="Event Picture" v-model="hero.pic"></v-text-field>
	      </v-col>
	      <v-col cols="12" sm="6">
	        <v-text-field label="Hero Text" v-model="hero.text"></v-text-field>
	      </v-col>
	    </v-row>
	</v-expansion-panel-text>
	</v-expansion-panel>
</template>