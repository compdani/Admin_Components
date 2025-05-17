<script setup>
import HeroSectionEditor from './HeroSectionEditor.vue';
import EventVisibilityEditor from './VisibilityEditor.vue';
import EventShortDescriptionEditor from './ShortDescriptionEditor.vue';
import ImageUploadModal from './ImageUploadModal.vue';
import { inject, ref } from 'vue';
const event_form = inject('event_form');

const current = defineModel();
const uploadmodal = ref(false);
const expansionHVD = ref(0);
const props = defineProps({
    uploadImages: {
        type: Function,
        required: true
    }
});
</script>
<template>
<v-row>
    <v-col cols="12" sm="6">
      <v-text-field label="Event Url" v-model="current.url" required></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field label="Start Time" v-model="current.event_start" type="datetime-local" required></v-text-field>
      <v-text-field label="End Time" v-model="current.event_end" type="datetime-local"></v-text-field>
    </v-col>
  </v-row>
  <v-text-field label="Title" v-model="current.title" required></v-text-field>
  <v-text-field label="Class" v-model="current.class"></v-text-field>
  <v-expansion-panels v-model="expansionHVD">
    <HeroSectionEditor v-model:hero="current.hero" />
    <EventVisibilityEditor v-model="current" />
    <EventShortDescriptionEditor  v-model="current.shortdescription" />
  </v-expansion-panels>
  <v-label class="mt-2">Promo Image(click to delete or change):</v-label>
  <v-img :src="event_form.image_url + current.id + '/' + current.image + '?thumb=350x0'"
    width="350" id="imagePreview" />
  <v-btn v-if="current.image == null || current.image == ''" @click="uploadmodal = true">Upload Image</v-btn>
  <v-menu location="end" activator="#imagePreview">
    <v-list>
      <v-list-item title="Change Picture" @click="uploadmodal = true" />
      <v-list-item title="Delete Picture" @click="deleteimage" />
    </v-list>
  </v-menu>
  <ImageUploadModal v-model="uploadmodal" :uploadImages="uploadImages" />
</template>