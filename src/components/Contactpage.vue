<template>
  <v-container>
    <v-row>
      <v-col md="5">
        <v-container>
          <v-card class="mx-auto" max-width="434" tile>
            <v-img
              max-height="270px"
              src="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&w=700"
            >
              <v-row align="end" class="fill-height">
                <v-col align-self="start" class="pa-0" cols="12">
                  <v-avatar class="profile" color="grey" size="160" tile>
                    <v-img
                      src="https://avatars.githubusercontent.com/u/42809204?s=400&u=cdf92638444a50ea959fd3b3512e4f2fc003016d&v=4"
                    ></v-img>
                  </v-avatar>
                </v-col>
                <v-col class="py-0">
                  <v-list-item color="black" dark class="text--darken-2">
                    <v-list-item-content>
                      <v-list-item-title class="title">Thenuka Dinu Jayarathna</v-list-item-title>
                      <v-list-item-subtitle>Software Engineer</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-img>
          </v-card>
        </v-container>
      </v-col>
      <v-col md="5" offset="1">
        <v-container>
          <v-row justify="start">
            <v-col sm="4">
              <h3 class="my-1">Github:</h3>
            </v-col>
            <v-col>
              <v-btn
                color="blue-grey"
                class="white--text"
                href="https://github.com/ThenukaDinu"
                target="_blank"
              >
                ThenukaDinu
                <v-icon right dark>mdi-github</v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <v-row justify="start">
            <v-col sm="4">
              <h3 class="my-1">Facebook:</h3>
            </v-col>
            <v-col>
              <v-btn
                color="#4267B2"
                class="white--text"
                href="https://facebook.com/thenuka98"
                target="_blank"
              >
                ThenukaDinu
                <v-icon right dark>mdi-facebook</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row justify="start">
            <v-col sm="4">
              <h3 class="my-1">Instagram:</h3>
            </v-col>
            <v-col>
              <v-btn
                color="pink"
                class="white--text"
                href="https://instagram.com/__thenuka98__"
                target="_blank"
              >
                ThenukaDinu
                <v-icon right dark>mdi-instagram</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row justify="start">
            <v-col sm="4">
              <h3 class="my-1">Twitter:</h3>
            </v-col>
            <v-col>
              <v-btn
                color="blue"
                class="white--text"
                href="https://twitter.com/Thenukamaxwell"
                target="_blank"
              >
                ThenukaDinu
                <v-icon right dark>mdi-twitter</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row justify="start">
            <v-col sm="4">
              <h3 class="my-1">LinkedIn:</h3>
            </v-col>
            <v-col>
              <v-btn
                color="#0e76a8 "
                class="white--text"
                href="https://www.linkedin.com/in/thenukadinu/"
                target="_blank"
              >
                ThenukaDinu
                <v-icon right dark>mdi-linkedin</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style>
</style>