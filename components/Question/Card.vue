<template>
  <div>
    {{ formId }}
    {{ questions }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["formId"],
  computed: {
    ...mapState("questions", ["questions"]),
  },
};
</script>
