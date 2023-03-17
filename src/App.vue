<template>
  <GitHubUI /> 
  <!-- <HomePage /> -->
  <!-- <GitHubFetch/>  -->
  <!-- <SingleRepository />  -->
  <RouterView></RouterView>
 </template> 

<script>
import GitHubUI from './components/GitHubUI.vue';
// import HomePage from './components/HomePage.vue';
// import GitHubFetch from './components/GitHubFetch.vue';
// import SingleRepository from './components/SingleRepository.vue';


export default {
  name: 'App',
  components: {
    GitHubUI,
    // HomePage
    // GitHubFetch,
    // SingleRepository,
 }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
