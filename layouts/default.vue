<template>
  <v-app dark>
    <v-main>
      <AlertRight />
      <TheHeader />
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import AlertRight from "~/components/AlertRight.vue";

export default {
  name: "default",
};
</script>
