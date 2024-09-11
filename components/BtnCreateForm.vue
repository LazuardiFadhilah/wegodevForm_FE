<template>
  <v-btn color="primary" :loading="isLoading" @click="createNewForm">
    New Form
    <v-icon>mdi-plus</v-icon>
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    async createNewForm() {
      try {
        this.isLoading = true;
        const forms = await this.$store.dispatch("forms/store");
        const questions = await this.$store.dispatch(
          "questions/store",
          forms.form._id
        );
        console.log(forms);
        console.log(questions);
        // const question = await this.$axios.$post(
        //   `/forms/${forms.form._id}/questions`
        // );
        // console.log(forms);
        // console.log(question);
        // this.$router.push(`/questions/${forms.form._id}`);
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
  },
};
</script>
