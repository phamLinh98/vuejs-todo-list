import { ref } from 'vue'
import TodoItem from '../../components/TodoItem.vue'

const newTodo = ref('')
const todos = ref([])

function addTodo() {
  if (newTodo.value.trim()) {
    todos.value.push(newTodo.value)
    newTodo.value = ''
  }
}

function removeTodo(index) {
  todos.value.splice(index, 1)
}

export { newTodo, todos, addTodo, removeTodo, TodoItem }
