<template>
  <div>
    <v-container fluid class="pa-0"> <Toolbar class="mb-5" /> </v-container>
    <v-container>
      <v-row justify="center" align="center">
        <v-col md="8" sm="8" xl="8">
          <v-card class="card-border-top">
            <v-card-text>
              <QuestionTitle class="text-h5" /> <QuestionDescription
            /></v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <QuestionCard :formId="formId" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  middleware: ["authenticated"],
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
        if (response.form.question.length > 0) {
          this.$store.commit("questions/set", response.form.question);
        }

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
