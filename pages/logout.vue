<template>
  <v-row>
    <v-col cols="10" offset="1" md="4" offset-md="4">
      <v-card>
        <v-card-title>Logout</v-card-title>
        <v-card-text>
          <v-alert type="info" icon="mdi-information" border="left">
            You have been logged out.
          </v-alert>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  middleware: ["authenticated"],
  mounted() {
    // set timer 3 second
    setTimeout(() => {
      this.$store.commit("auth/logout");
      // direct to login
      this.$router.push({ name: `login___` + this.$i18n.locale });
    }, 1000);
  },
};
</script>
