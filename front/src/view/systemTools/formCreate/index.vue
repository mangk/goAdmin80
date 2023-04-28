<template>
  <div style="height:80vh">
    <iframe width="100%" height="100%" :src="`/form-generator/index.html`" frameborder="0" />
  </div>
</template>

<script>
export default {
  name: 'FormGenerator'
}
</script>

<script setup>
import { ref } from 'vue'
const basePath = ref(import.meta.env.VITE_BASE_PATH)
const basePort = ref(import.meta.env.VITE_SERVER_PORT)
</script>
