<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <Footer />
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
