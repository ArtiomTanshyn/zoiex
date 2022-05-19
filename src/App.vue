<template>
  <v-app>
    <Header @getSearchGifs="getSearchGifs" />
    <v-main>
      <router-view :searching="searching" />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",

  components: {
    Header,
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
