<template src="./Home.html">
    <Test :message="msg" />
</template>
<script setup>
import { ref } from 'vue'

const newTodo = ref('')
const todos = ref([])

const addTodo = () =>  {
  if (newTodo.value.trim()) {
    todos.value.push(newTodo.value)
    newTodo.value = ''
  }
}

const removeTodo = (index) => {
  todos.value.splice(index, 1)
}
</script>
<style scoped src="./Home.css"></style>
