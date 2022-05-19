<template>
  <v-text-field
    placeholder="Search"
    prepend-inner-icon="mdi-magnify"
    v-model="search"
    hide-details="auto"
  >
  </v-text-field>
</template>

<script>
export default {
  name: "Search",

  data: () => ({
    search: null,
  }),

  methods: {
    searchGifs(value) {
      this.$emit("getSearchGifs", value);
    },
  },

  watch: {
    search: {
      deep: true,
      handler(value) {
        this.searchGifs(value);
      },
    },
  },
};
</script>