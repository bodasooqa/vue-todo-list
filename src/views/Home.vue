<template>
  <div class="home">
    <h1>Todo List</h1>
    <todo-list></todo-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoList from "@/components/TodoList.vue";
import { todoMapper } from "@/store/modules/todo.store";


const HomeProps = Vue.extend({
  computed: todoMapper.mapGetters(['double'])
});

@Component({
  components: { TodoList }
})
export default class Home extends HomeProps {
  mounted() {
    console.log('mounted', this.double);
  }
}
</script>
