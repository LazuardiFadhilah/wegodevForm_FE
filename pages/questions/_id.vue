<template>
  <div>
    <v-container fluid class="pa-0"> <Toolbar /> </v-container>
    <v-container>
      <v-row justify="center" align="center">
        <v-col md="12" offset-md="2" sm="10" offset-sm="1" xl="10">
          <v-card>
            <v-card-text>
              <QuestionTitle /> <QuestionDescription
            /></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  async asyncData({ params, redirect }) {
    try {
      if (!params.id) {
        throw { message: "FORM_ID_EMPTY" };
      }
      return { formId: params.id };
    } catch (error) {
      redirect("/404");
      return false;
    }
  },
  methods: {
    async fetch() {
      try {
        const response = await this.$store.dispatch(`forms/show`, this.formId);
        if (!response) throw { message: "ERROR" };
        return response;
      } catch (error) {
        if (error.response) {
          this.$nuxt.error({
            statusCode: error.response.status,
            customMessage: error.response.data.message,
          });
        } else {
          this.$store.commit("alerts/show", {
            message: this.$t("SERVER_ERROR"),
            type: "error",
          });
        }
      }
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
