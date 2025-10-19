<template>
  <li>
    {{ todo }}
    <button @click="$emit('remove')">❌</button>
  </li>
</template>

<script setup>
defineProps({
  todo: String
})
</script>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f8f8;
  margin: 4px 0;
  padding: 8px 12px;
  border-radius: 6px;
}
button {
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>
