<script>
export default {
  layout: "auth",
  middleware: ["authenticated"],
  mounted() {
    this.$store.commit("auth/logout");
    // direct to login
    this.$router.push({ name: `login___` + this.$i18n.locale });
  },
};
</script>
