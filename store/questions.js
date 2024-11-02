export const state = () => ({
  questions: [],
});

export const mutations = {
  set(state, questions) {
    state.questions = questions;
  },
};

export const actions = {
  async store({}, id) {
    const response = await this.$axios.$post(`/forms/${id}/questions`);
    if (!response) {
      return false;
    }
    return response;
  },
};
