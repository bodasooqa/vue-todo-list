<template>
  <div>
    <div class="todo-list">
      <todo-new></todo-new>
      <todo-item v-for="(todo, i) of todos" :key="i" :todo="todo"></todo-item>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  import TodoItem from "@/components/TodoItem.vue";
  import TodoNew from "@/components/TodoNew.vue";
  import { ITodo } from "@/types";

  @Component({
    components: { TodoItem, TodoNew }
  })
  export default class TodoList extends Vue {
    @Prop() private todos!: ITodo[];
  }
</script>

<style lang="scss" scoped>
  .todo-list {
    display: flex;
    flex-direction: column;
  }
</style>