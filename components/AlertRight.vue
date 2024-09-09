<template>
  <div class="v-alert-right">
    <v-alert outlined border="left" type="error" class="v-bg-white">
      test
    </v-alert>
  </div>
</template>

<style scoped>
.v-bg-white {
  background-color: white !important;
}
.v-alert-right {
  max-width: 40%;
  position: fixed;
  right: 20px;
  bottom: 10px;
  z-index: 9;
}
@media screen and (max-width: 768px) {
  .v-alert-right {
    max-width: 70%;
  }
}
</style>
