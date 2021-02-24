<template>
  <div id="app">
    <v-app id="inspire">
      <Nav />
      <router-view></router-view>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export default {
  name: "App",

  components: {
    Nav,
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
