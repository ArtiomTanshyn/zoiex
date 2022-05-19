<template>
  <v-row dense>
    <v-col
      class="col-12 col-sm-6 col-lg-4 col-md-6"
      v-for="gif in gifs"
      :key="gif.id"
    >
      <v-img
        :src="gif.gif_url"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="300px"
        width="auto"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
        <template>
          <v-row
            class="fill-height mt-0 mr-5 mb-5 ml-5"
            align="end"
            justify="space-between"
          >
            <v-btn color="#fff" @click="copyInfo(gif)" icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
            <v-btn
              icon
              color="#fff"
              @click="
                $router.push({
                  name: 'single',
                  params: { id: gif.id },
                })
              "
              ><v-icon>mdi-eye</v-icon></v-btn
            >
          </v-row>
        </template>
      </v-img>
    </v-col>
    <v-col height="300px" v-intersect="infiniteScrolling"></v-col>
  </v-row>
</template>

<script>
export default {
  name: "Gifs",

  props: {
    gifs: {
      type: Array,
    },
  },

  data: () => ({}),

  computed: {
    webShareApiSupported() {
      return navigator.share;
    },
  },

  methods: {
    copyInfo(gif) {
      if (this.webShareApiSupported) {
        navigator.share({ url: gif.gif_url, text: gif.name });
      } else {
        alert("oooops...");
      }
    },
    infiniteScrolling() {
      this.$emit("infiniteScrolling");
    },
  },
};
</script>