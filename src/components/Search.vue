<template>
  <v-text-field
    placeholder="Search"
    prepend-inner-icon="mdi-magnify"
    v-model="search"
    dense
  >
  </v-text-field>
</template>

<script>
import api from "../middlewares/api";
import debounce from "lodash/debounce";

export default {
  name: "Search",

  data: () => ({
    search: null,
    url: "v1/channels/search",
    api_key: "Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g",
    gifs: [],
  }),

  methods: {
    getGifs: debounce(async function (value) {
      if (value == "") {
        this.gifs = null;
      } else {
        const response = await api.get(this.url, {
          params: {
            api_key: this.api_key,
            q: value,
          },
        });
        this.gifs =
          response.data.data.length != 0
            ? this.convertArray(response.data.data)
            : { not_found: true };
      }
      this.$emit("getSearchGifs", this.gifs);
    }, 500),

    convertArray(data) {
      return data
        .filter((item) => item.featured_gif != null)
        .map((item) => ({
          gif_url: item.featured_gif.images.downsized.url,
          name: item.display_name,
          id: item.featured_gif.id,
        }));
    },
  },
  watch: {
    search: {
      deep: true,
      async handler(value) {
        await this.getGifs(value);
      },
    },
  },
};
</script>