<script setup lang="ts">
import { ref } from "vue";
import Message from "./Message";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h2>Test</h2>
  <div>
    <Message :msg="msg" />
  </div>
</template>

<style scoped></style>
