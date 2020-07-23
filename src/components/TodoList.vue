<template>
  <div>
    <ul>
      <todo-item v-for="(item, i) of 10" :key="i" :item="item"></todo-item>
    </ul>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import TodoItem from "@/components/TodoItem.vue";

  @Component({
    components: { TodoItem }
  })
  export default class TodoList extends Vue {
  }
</script>

<style scoped>

</style>