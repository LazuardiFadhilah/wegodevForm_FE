export const state = () => ({
  alerts: [
    // {
    //   message: "Something went wrong",
    //   type: "error",
    //   show: true,
    // },
    // {
    //   message: "something wrong happened",
    //   type: "success",
    //   show: true,
    // },
  ],
});

export const mutations = {
  show(state, alert) {
    state.alerts.push(alert);
  },
  close(state, index) {
    state.alerts[index].show = false;
  },
  reset(state) {
    state.alerts = [];
  },
};
