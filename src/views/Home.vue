<template>
  <div class="home">
    <h1>Todo List</h1>
    <todo-list :todos="todos"></todo-list>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import TodoList from "@/components/TodoList.vue";
  import { todoMapper } from "@/store/modules/todo.store";


  const HomeProps = Vue.extend({
  computed: todoMapper.mapGetters(['todos']),
  methods: todoMapper.mapActions(['getTodos'])
});

@Component({
  components: { TodoList }
})
export default class Home extends HomeProps {
  mounted() {
    this.getTodos(10);
  }
}
</script>

<style lang="scss">
  .home {
    max-width: 600px;
    margin: auto;
    background: #ffffff;
    padding: 1rem;
    box-shadow: 0 10px 30px -10px rgb(0 0 0 / 25%);

    > h1 {
      text-align: center;
      margin: 1rem auto;
    }
  }
</style>