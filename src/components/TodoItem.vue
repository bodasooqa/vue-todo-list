<template>
  <div class="todo-item">
    <input type="checkbox" v-model="todo.completed">
    <span class="todo-item__title" :class="{ 'todo-item__title--completed': todo.completed }">{{todo.title}}</span>
    <button class="todo-item__rm-btn" @click="rmTodo(todo.id)">&times;</button>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  import { ITodo } from "@/types";
  import { todoMapper } from "@/store/modules/todo.store";


  const TodoItemProps = Vue.extend({
    methods: todoMapper.mapMutations(['rmTodoById'])
  });

  @Component
  export default class TodoItem extends TodoItemProps {
    @Prop() private todo!: ITodo;

    rmTodo(id: number) {
      this.rmTodoById(id);
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/variables";

  .todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 0;
    border-bottom: 1px solid rgba($main-color, .2);

    &__title {
      flex: 1;
      margin-left: .5rem;

      &--completed {
        text-decoration: line-through;
        opacity: .5;
      }
    }

    &__rm-btn {
      color: #ffffff;
      background: $danger-color;
      border: none;
      outline: none;
      cursor: pointer;
      transition: all .2s;
      font-size: 1rem;
      font-weight: bold;

      &:hover {
        background: lighten($danger-color, 10);
      }
    }
  }
</style>