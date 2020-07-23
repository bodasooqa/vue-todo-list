<template>
  <div>
    <div class="todo-list">
      <todo-new></todo-new>
      <div v-if="todos.length">
        <todo-item v-for="(todo, i) of todos" :key="i" :todo="todo"></todo-item>
      </div>
      <div class="todo-list__empty" v-else>
        There are no items
      </div>
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

    &__empty {
      text-align: center;
    }
  }
</style>