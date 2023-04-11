<template>
  <router-view #default="{ Component }">
    <keep-alive :include="['pageOne']">
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>

<script setup>
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
