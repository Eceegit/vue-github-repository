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

</style>
