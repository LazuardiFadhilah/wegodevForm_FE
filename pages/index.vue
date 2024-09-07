<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6"> </v-col>
    index
  </v-row>
</template>

<script>
export default {
  middleware: "authenticated",
  head() {
    return {
      title: "Home",
    };
  },
  methods: {
    async fetchForms() {
      try {
        const response = await this.$axios.$get("/forms");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.fetchForms();
  },
};
</script>
