<template>
  <v-text-field
    placeholder="Description"
    class="creator-input"
    hide-details
    :value="description"
    @input="typing($event)"
  >
  </v-text-field>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      timer: null,
    };
  },
  computed: {
    ...mapState("forms", ["id", "description"]),
  },
  methods: {
    async typing(value) {
      try {
        clearTimeout(this.timer);
        this.timer = setTimeout(async () => {
          let payload = {
            formId: this.id,
            description: value,
          };
          const forms = await this.$store.dispatch("forms/update", payload);
          if (!forms) throw { message: "ERROR" };
        }, 1000);
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
