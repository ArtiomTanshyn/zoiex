<template>
  <v-container class="pt-10 pb-10">
    <Loader v-show="loader" :loader="loader" />
    <v-row v-if="gifs.not_found" class="justify-center" dense>
      <v-card>
        <v-card-title class="justify-center"
          >Ooooops! Gifs not found</v-card-title
        >
        <v-img
          height="300px"
          width="auto"
          :src="require('@/assets/404.jpeg')"
        ></v-img>
      </v-card>
    </v-row>
    <Gifs v-if="!gifs.not_found" :gifs="gifs" />
    <v-row
      v-if="searchValue && !gifs.not_found && gifs.length"
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
    searchValue: {
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
    total_count: null,
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
      this.total_count =
        response.data.pagination.total_count < 50
          ? response.data.pagination.total_count
          : 50;
      this.loader = false;
    }, 500),

    handleScrolledToBottom: debounce(async function (isVisible) {
      if (
        isVisible &&
        this.searchValue &&
        this.gifs.length !== this.total_count
      ) {
        this.limit += 9;
        await this.searchGifs(this.searchValue);
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
    searchValue: {
      async handler(value) {
        this.gifs = [];
        this.limit = 9;
        this.total_count = null;
        value ? await this.searchGifs(value) : await this.getGifs();
      },
    },
  },
};
</script>
