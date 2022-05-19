<template>
  <v-app>
    <Header @getSearchGifs="getSearchGifs" />
    <v-main>
      <router-view :searchValue="searchValue" />
    </v-main>
    <v-footer dark padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Gifs</strong>
      </v-col>
    </v-footer>
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
    searchValue: null,
  }),
  methods: {
    getSearchGifs(value) {
      this.searchValue = value;
    },
  },
};
</script>
