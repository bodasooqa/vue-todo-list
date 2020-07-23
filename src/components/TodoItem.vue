<template>
  <li>Item {{item}}</li>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  import { ITodo } from "@/types";

  @Component
  export default class TodoItem extends Vue {
    @Prop() private todo!: ITodo;
  }
</script>

<style scoped>

</style>