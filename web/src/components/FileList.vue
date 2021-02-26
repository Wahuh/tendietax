<template>
  <ul class="w-full">
    <li :key="file.name" v-for="file in files" class="flex mb-2">
      <img src="@/assets/trading212.png" class="w-10 h-10 rounded-lg" />
      <div class="ml-2 flex flex-col text-left flex-1">
        <p class="text-sm mb-1">{{ file.name }}</p>
        <p class="text-xs">{{ (file.size / 1000).toFixed(1) }} KB</p>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FileList',
  props: {
    files: {
      type: [File],
      required: true,
    },
  },
});
</script>
