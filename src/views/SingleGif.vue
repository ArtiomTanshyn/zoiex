<template>
  <v-container>
    <Loader v-show="loader" :loader="loader" />
    <v-row v-if="gif" dense>
      <v-col class="col-12">
        <v-img
          :src="gif.gif_url"
          width="100%"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "../middlewares/api";
import Loader from "../components/Loader";

export default {
  name: "SingleGif",

  components: {
    Loader,
  },

  data: () => ({
    url: "v1/gifs/",
    api_key: "bHXi6e54UeAetadh1gr7DAe5QnOG0Fr0",
    gif: null,
    loader: false,
  }),

  async mounted() {
    await this.getGifs();
  },
  methods: {
    async getGifs() {
      this.loader = true;
      const response = await api.get(this.url + this.$route.params.id, {
        params: {
          api_key: this.api_key,
        },
      });

      this.gif = {
        id: response.data.data.id,
        gif_url: response.data.data.images.downsized.url,
      };
      this.loader = false;
    },
  },
};
</script>
