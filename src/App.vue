<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/NavBar';

export default {
  name: 'App',
  components: { Navbar },
};
</script>

<style>
*, html, body {
  font-family: 'Roboto'
}
</style>
