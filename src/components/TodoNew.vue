<template>
  <div class="todo-form">
    <form @submit.prevent="submit">
      <input type="text" placeholder="Title" v-model="title">
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { todoMapper } from "@/store/modules/todo.store";


  const TodoNewProps = Vue.extend({
    methods: todoMapper.mapMutations(['addTodo'])
  })

  @Component
  export default class TodoNew extends TodoNewProps {
    private title = '';

    submit() {
      if (this.title.trim()) {
        this.addTodo(this.title);
        this.title = '';
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/variables";

  .todo-form {
    margin-bottom: 1rem;

    > form {
      display: flex;

      > input, > button {
        font-size: 16px;
        outline: none;
        font-family: Avenir, Helvetica, Arial, sans-serif;
      }

      > input {
        border: 1px solid rgba($main-color, .5);
        border-radius: 0;
        padding: .5rem;
        flex: 1;
      }

      > button {
        border-radius: 0;
        border: none;
        padding: .5rem 1rem;
        color: #ffffff;
        background: $main-color;
        cursor: pointer;
        transition: all .2s;
        text-transform: uppercase;

        &:hover {
          background: lighten($main-color, 10);
        }
      }
    }
  }
</style>