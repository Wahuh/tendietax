<template>
  <div
    class="relative bg-light-gray2 border border-light-gray1 rounded-md w-full h-28 flex flex-col justify-center max-w-md"
  >
    <input
      type="file"
      class="absolute left-0 top-0 opacity-0 overflow-hidden w-full h-full cursor-pointer"
      @change="handleFileUpload"
      multiple
    />
    <div class="flex flex-col items-center">
      <file-upload-icon />

      <p class="mt-3 text-sm">Browse or drag & drop</p>
    </div>
  </div>
</template>

<script lang="ts">
import FileUploadIcon from './FileUploadIcon.vue';

export default {
  components: { FileUploadIcon },
  name: 'FileUploader',
  emits: ['upload'],
  methods: {
    handleFileUpload(e: InputEvent) {
      const { files } = e.target as HTMLInputElement;
      this.$emit('upload', files);
    },
  },
};
</script>
