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
