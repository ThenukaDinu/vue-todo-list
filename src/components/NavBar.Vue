<template>
  <div>
    <v-toolbar>
      <v-slide-group multiple show-arrows>
        <router-link to="/" exact>
          <v-slide-item v-slot:default="{ toggle }">
            <v-btn
              v-bind:class="currentRouteName === 'Home' ? 'nav-active' : ''"
              class="mx-2"
              active-class="purple white--text"
              depressed
              rounded
              @click="toggle"
            >Home</v-btn>
          </v-slide-item>
        </router-link>
        <router-link to="/about">
          <v-slide-item v-slot:default="{ toggle }">
            <v-btn
              v-bind:class="currentRouteName === 'About' ? 'nav-active' : ''"
              class="mx-2"
              active-class="purple white--text "
              depressed
              rounded
              @click="toggle"
            >About</v-btn>
          </v-slide-item>
        </router-link>
        <router-link to="/contact">
          <v-slide-item v-slot:default="{ toggle }">
            <v-btn
              v-bind:class="currentRouteName === 'Contact' ? 'nav-active' : ''"
              class="mx-2"
              active-class="purple white--text"
              depressed
              rounded
              @click="toggle"
            >Contact</v-btn>
          </v-slide-item>
        </router-link>
      </v-slide-group>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      //
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #000;
}

.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined).nav {
  background-color: #fff !important;
}
.v-btn--rounded {
  border-radius: 0 !important;
  background-color: #fff !important;
  color: #273f70 !important;
}
/* button.mx-2:nth-child(1) {
  color: #3c8bfb !important;
  border-bottom: 4px solid #3c8bfb !important;
} */
.v-item-group {
  height: 100%;
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 100% !important;
}
body
  > div:nth-child(2)
  > div:nth-child(4)
  > header:nth-child(1)
  > div:nth-child(1) {
  margin: 0 10mm;
  margin-right: 0;
}

.nav-active {
  color: #3c8bfb !important;
  border-bottom: 4px solid #3c8bfb !important;
}
</style>
