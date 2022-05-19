<template>
  <v-app-bar app color="#333" dark>
    <v-container>
      <v-row class="pr-3 pl-3" align="center">
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
      </v-row>
    </v-container>
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
