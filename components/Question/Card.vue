<template>
  <div>
    <v-row v-for="(question, i) in questions" :key="i">
      <v-col md="8" offset-md="2" sm="10" offset-sm="1" lg="8">
        <v-card>
          <v-card-text background="white" class="pb-0">
            {{ question.question }}
          </v-card-text>
          <v-card-actions>
            <v-divider></v-divider>
            <v-btn text>Button</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
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
