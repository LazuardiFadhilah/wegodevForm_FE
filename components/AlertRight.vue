<template>
  <div class="v-alert-right">
    <v-alert
      outlined
      border="left"
      :type="alert.type"
      v-model="alert.show"
      class="v-bg-white"
      v-for="(alert, index) in alerts"
      :key="index"
    >
      <v-row align="center">
        <v-col class="grow"> {{ alert.message }} </v-col>
        <v-col class="shrink">
          <v-btn icon :color="alert.type" @click="onClose(index)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-alert>
  </div>
</template>

<script>
export default {
  name: "AlertRight",
  data() {
    return {
      alerts: [
        {
          message: "Something went wrong",
          type: "error",
          show: true,
        },
        {
          message: "something wrong happened",
          type: "success",
          show: true,
        },
      ],
    };
  },
  methods: {
    onClose(index) {
      this.alerts[index].show = false;
    },
  },
};
</script>

<style scoped>
.v-bg-white {
  background-color: white !important;
}
.v-alert-right {
  max-width: 40%;
  position: fixed;
  right: 20px;
  bottom: 10px;
  z-index: 9;
}
@media screen and (max-width: 768px) {
  .v-alert-right {
    max-width: 70%;
  }
}
</style>
