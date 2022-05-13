<template>
  <v-app-bar color="#333" dark>
    <svg
      @click="
        $router.push({
          name: 'home',
        })
      "
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 13.04C1.01244 12.32 2.278 11.6 3.79666 10.96C5.14658 10.4 6.32776 10 7.42458 9.76C7.9308 8.24 8.94324 6.08 10.5463 3.84C11.8962 2.08 13.2461 0.88 14.3429 0C15.0179 2.24 15.7772 4.56 16.4522 6.8C15.1023 7.68 13.4992 8.88 11.8962 10.4C10.1244 12.08 8.7745 13.76 7.76206 15.2C9.70257 13.36 12.8243 11.04 16.9584 9.28C20.1645 7.92 23.1174 7.28 25.3111 7.04C24.2986 8.24 23.2018 9.6 22.105 11.2C21.1769 12.56 20.3332 13.92 19.6583 15.2C20.2488 18.16 20.9238 21.12 21.5144 24L12.4024 18.4C12.993 17.52 13.5836 16.48 14.4273 15.52C15.271 14.48 16.0303 13.52 16.7897 12.72C15.271 13.6 13.668 14.64 11.9806 16C8.60576 18.64 6.15902 21.52 4.38725 23.92C4.21851 22.4 4.21851 20.56 4.55599 18.4C4.8091 16.96 5.23095 15.68 5.56843 14.72C3.71229 14.16 1.85614 13.6 0 13.04Z"
        fill="url(#paint0_linear_3826_14303)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3826_14303"
          x1="-5.45496"
          y1="28.5587"
          x2="32.2686"
          y2="-1.18984"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5199FF" />
          <stop offset="1" stop-color="#0351C1" />
        </linearGradient>
      </defs>
    </svg>

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
