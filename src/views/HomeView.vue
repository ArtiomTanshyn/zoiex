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

export default {
  name: "HomeView",

  components: {
    Gifs,
    Navigation,
  },

  data: () => ({
    url: "v1/gifs/trending?api_key=Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g&pingback_id=180aa3a2570776ef",
    gifs: [],
  }),

  async mounted() {
    await this.getGifs();
  },
  methods: {
    async getGifs() {
      const response = await api.get(this.url);

      this.gifs = this.convertArray(response.data.data);
      return this.gifs;
    },

    convertArray(data) {
      return data.map((item) => ({
        gif_url: item.images.downsized.url,
        name: item.title,
        id: item.id,
      }));
    },

    async getSearchGifs(gifs) {
      this.gifs = gifs == null ? await this.getGifs() : gifs;
    },
  },
};
</script>
