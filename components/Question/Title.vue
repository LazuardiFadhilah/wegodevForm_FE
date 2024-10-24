<template>
  <v-text-field placeholder="title" :value="title" @input="typing($event)">
  </v-text-field>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("forms", ["id", "title"]),
  },
  methods: {
    async typing(value) {
      try {
        let payload = {
          formId: this.id,
          title: value,
        };
        const forms = await this.$store.dispatch("forms/update", payload);
        if (!forms) throw { message: "ERROR" };
      } catch (error) {
        this.$store.commit("alerts/show", {
          message: error.response
            ? this.$t(error.response.data.message)
            : this.$t("SERVER_ERROR"),
          type: "error",
        });
      }
    },
  },
};
</script>
