<template>
  <div id="app">
    <router-link to="/dashboard/static">Static</router-link> |
    <router-link to="/dashboard/page1/bar">Page1</router-link> |
    <router-link to="/dashboard/page2/vuejs">Page2</router-link> |
    <router-link to="/login">login</router-link>
    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>