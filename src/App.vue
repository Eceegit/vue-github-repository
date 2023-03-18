<template>
  <GitHubUI /> 
  <RouterView></RouterView>
  <FooterPage />
 </template> 

<script>
import FooterPage from './components/FooterPage.vue';
import GitHubUI from './components/GitHubUI.vue';


export default {
  name: 'App',
  components: {
    GitHubUI,
    FooterPage
}
}
</script>

<style>

</style>
