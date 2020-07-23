<template>
  <div class="home">
    <h1>Todo List</h1>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";

export default {
  name: 'Home',
  components: {
    TodoList
  }
}
</script>
