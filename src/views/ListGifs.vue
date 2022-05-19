<template>
  <v-container>
    <Loader v-show="loader" :loader="loader" />
    <v-row v-if="gifs.not_found" dense>
      <h2>Ooooops! Gifs not found</h2>
    </v-row>
    <Gifs v-if="!gifs.not_found" :gifs="gifs" />
    <v-row
      v-if="searching && !gifs.not_found && gifs.length"
      v-observe-visibility="handleScrolledToBottom"
    ></v-row>
  </v-container>
</template>

<script>
import Gifs from "../components/Gifs";
import Loader from "../components/Loader";
import api from "../middlewares/api";
import debounce from "lodash/debounce";

export default {
  name: "ListGifs",

  components: {
    Gifs,
    Loader,
  },

  props: {
    searching: {
      type: String,
      default: null,
    },
  },

  data: () => ({
    trandUrl: "v1/gifs/trending",
    searchUrl: "v1/gifs/search",
    api_key: "bHXi6e54UeAetadh1gr7DAe5QnOG0Fr0",
    gifs: [],
    loader: false,
    limit: 9,
  }),

  async mounted() {
    await this.getGifs();
  },
  methods: {
    async getGifs() {
      this.loader = true;
      const response = await api.get(this.trandUrl, {
        params: {
          api_key: this.api_key,
        },
      });
      this.gifs = this.convertArray(response.data.data);
      this.loader = false;
    },

    searchGifs: debounce(async function (value) {
      this.loader = true;

      const response = await api.get(this.searchUrl, {
        params: {
          api_key: this.api_key,
          q: value,
          limit: this.limit,
        },
      });
      this.gifs =
        response.data.data.length != 0
          ? this.convertArray(response.data.data)
          : { not_found: true };
      this.loader = false;
    }, 500),

    handleScrolledToBottom: debounce(async function (isVisible) {
      if (isVisible && this.searching) {
        this.limit += 9;
        console.log(this.limit);
        await this.searchGifs(this.searching);
      }
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
  },
  watch: {
    searching: {
      async handler(value) {
        this.gifs = [];
        this.limit = 9;
        value ? await this.searchGifs(value) : await this.getGifs();
      },
    },
  },
};
</script>
