<template>
  <v-app-bar app color="#333" dark>
    <img
      width="50"
      @click="
        $router.push({
          name: 'home',
        })
      "
      :src="require('@/assets/g.png')"
    />

    <v-spacer></v-spacer>
    <v-btn
      v-if="$route.params.id"
      class="link"
      @click="
        $router.push({
          name: 'home',
        })
      "
      >View All</v-btn
    >
    <Search v-else @getSearchGifs="getSearchGifs" />
  </v-app-bar>
</template>

<script>
import Search from "./Search.vue";

export default {
  data() {
    return {};
  },
  methods: {
    async getSearchGifs(value) {
      this.$emit("getSearchGifs", value);
    },
  },
  components: {
    Search,
  },
};
</script>
