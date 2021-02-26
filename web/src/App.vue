<template>
  <form class="flex flex-col items-center px-4">
    <h2 class="font-bold text-xl mb-1">Upload your trading data</h2>
    <p class="mb-6 text-sm">Should be in .csv format</p>
    <file-uploader @upload="handleFileUpload" />
    <h4 class="mt-6 mb-4 self-start">Uploaded files</h4>
    <file-list :files="files" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FileList from './components/FileList.vue';
import FileUploader from './components/FileUploader.vue';

export default defineComponent({
  components: { FileUploader, FileList },
  name: 'App',
  data() {
    const files: File[] = [];
    return {
      files,
    };
  },
  methods: {
    handleFileUpload(files: File[]) {
      this.files = [...this.files, ...files];
    },
  },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;700&display=swap');

#app {
  font-family: Public Sans, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
