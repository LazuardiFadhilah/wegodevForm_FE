export const state = () => ({
  id: null,
  title: null,
  description: null,
  public: null,
});

export const mutations = {
  setForm(state, form) {
    state.id = form.id ? form.id : null;
    state.title = form.title ? form.title : null;
    state.description = form.description ? form.description : null;
    state.public = form.public ? form.public : null;
  },
};

export const actions = {
  async store() {
    const response = await this.$axios.$post("/forms");
    if (!response) {
      return false;
    }
    commit("setForm", response);
    return response;
  },

  async show({ commit }, id) {
    const response = await this.$axios.$get(`/forms/${id}`);
    if (!response) {
      return false;
    }
    console.log(response);
    return response;
  },
};
