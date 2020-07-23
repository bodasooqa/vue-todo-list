<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "assets/scss/variables";

  html, body {
    margin: 0;
    height: 100%;
    background: rgba($main-color, .05);
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $main-color;
  }

  #nav {
    padding: 30px;
    text-align: center;

    a {
      font-weight: bold;
      color: $main-color;

      &.router-link-exact-active {
        color: $active-color;
      }
    }
  }
</style>
