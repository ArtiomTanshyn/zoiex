<template>
  <v-app>
    <Navigation @getSearchGifs="getSearchGifs" />
    <v-main>
      <router-view :searching="searching" />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  name: "App",

  components: {
    Navigation,
  },

  data: () => ({
    searching: null,
  }),
  methods: {
    getSearchGifs(value) {
      this.searching = value;
    },
  },
};
</script>
