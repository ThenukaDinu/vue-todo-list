<template>
  <div id="app">
    <v-app id="inspire">
      <Navbar />
      <router-view></router-view>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
export default {
  name: "App",

  components: {
    Navbar,
    Footer
  },

  data: () => ({
    //
  })
};
</script>

<style>
*,
html {
  font-family: "Roboto";
}
</style>
