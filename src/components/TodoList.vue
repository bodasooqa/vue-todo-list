<template>
  <div>
    <ul>
      <todo-item v-for="(todo, i) of todos" :key="i" :todo="todo"></todo-item>
    </ul>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  import TodoItem from "@/components/TodoItem.vue";
  import { ITodo } from "@/types";

  @Component({
    components: { TodoItem }
  })
  export default class TodoList extends Vue {
    @Prop() private todos!: ITodo[];
  }
</script>

<style scoped>

</style>