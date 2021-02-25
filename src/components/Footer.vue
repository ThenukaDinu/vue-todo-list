<template>
  <v-footer light padless>
    <v-card class="flex" flat tile>
      <v-card-title class="">
        <div class="a">TODO APP | Vue | Vuetify | MockAPI | Axios</div>

        <v-spacer></v-spacer>

        <v-btn
          v-for="(icon,index) in icons"
          :key="index"
          class="mx-4"
          icon
          v-on:click="openSocialMedia(icon.url)"
        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="b">© 2021 TDJ. All Rights Reserved</v-card-text>
    </v-card>
  </v-footer>
</template>

<style scoped>
div {
  color: #797979;
}
.a {
  height: 17px;
  color: #797979;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  text-align: left;
}
.b {
  height: 15px;
  color: #797979;
  font-family: Arial;
  font-size: 12px;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  text-align: left;
}
</style>

<script>
export default {
  data: () => ({
    icons: [
      { icon: 'mdi-facebook', url: 'https://facebook.com/thenuka98' },
      { icon: 'mdi-github', url: 'https://github.com/ThenukaDinu' },
      { icon: 'mdi-instagram', url: 'https://instagram.com/__thenuka98__/' },
    ],
  }),
  methods: {
    openSocialMedia(url) {
      window.open(url, '_blank');
    }
  }
};
</script>
