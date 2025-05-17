<script setup>
import { blobToWebP } from 'webp-converter-browser';
import { ref } from 'vue';
const uploadmodal = defineModel();
const imageFile = ref(null);

const props = defineProps({
    uploadImages: {
        type: Function,
        required: true
    }
});
async function setImage() {
  let fd = new FormData();
  let files = imageFile.value;
  //make the file a blob
  let blob = new Blob([files], { type: "image/*" });
  //convert the blob to webp
  let webp = await blobToWebP(blob);
  //make the webp a file
  let webpFile = new File([webp], files.name + ".webp", { type: "image/webp" });
  fd.append('image', webpFile);
  props.uploadImages(fd);
}
</script>

<template>
<v-dialog v-model="uploadmodal" max-width="800">
    <v-card>
      <v-card-title>Upload Image</v-card-title>
      <v-card-text>
        <v-file-input v-model="imageFile" label="Select Image" accept="image/*"></v-file-input>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="setImage">Upload</v-btn>
        <v-btn @click="uploadmodal = false">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>