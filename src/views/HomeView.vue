<template>
  <v-card v-if="gifs" class="overflow-hidden">
    <Navigation @getSearchGifs="getSearchGifs" />
    <v-sheet>
      <Gifs v-if="!gifs.not_found" :gifs="gifs" />
      <v-container v-else>
        <v-row dense>
          <h2>Ooooops! Gifs not found</h2>
        </v-row>
      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
import Gifs from "../components/Gifs";
import Navigation from "../components/Navigation";
import api from "../middlewares/api";
import debounce from "lodash/debounce";

export default {
  name: "HomeView",

  components: {
    Gifs,
    Navigation,
  },

  data: () => ({
    trandUrl: "v1/gifs/trending",
    searchUrl: "v1/gifs/search",
    api_key: "bHXi6e54UeAetadh1gr7DAe5QnOG0Fr0",
    gifs: [],
  }),

  async mounted() {
    await this.getGifs();
  },
  methods: {
    async getGifs() {
      const response = await api.get(this.trandUrl, {
        params: {
          api_key: this.api_key,
        },
      });
      this.gifs = this.convertArray(response.data.data);
    },

    searchGifs: debounce(async function (value) {
      const response = await api.get(this.searchUrl, {
        params: {
          api_key: this.api_key,
          q: value,
        },
      });
      this.gifs =
        response.data.data.length != 0
          ? this.convertArray(response.data.data)
          : { not_found: true };
    }, 500),

    convertArray(data) {
      return data
        .filter((item) => item.images != null)
        .map((item) => ({
          gif_url: item.images.downsized.url,
          name: item.title,
          id: item.id,
        }));
    },

    async getSearchGifs(value) {
      value ? await this.searchGifs(value) : await this.getGifs();
    },
  },
};
</script>
