<template>
    <li>Item {{item}}</li>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

  @Component
  export default class TodoItem extends Vue {
      @Prop() private item!: number;
  }
</script>

<style scoped>

</style>