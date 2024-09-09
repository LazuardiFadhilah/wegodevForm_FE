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
      this.isLoading = true;
    },
  },
};
</script>
