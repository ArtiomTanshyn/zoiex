<template>
  <div class="background">
    <v-card class="" width="75%" height="123px" dark>
      <v-card-text>
        Loading...
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0 mt-5"
          height="20"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.background {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: RGBA(0, 0, 0, 0.7);
  z-index: 100;
}
</style>