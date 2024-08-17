<template>
  <v-row>
    <v-col md="4" offset-md="4" cols="10" offset="1">
      <v-card>
        <v-toolbar dark color="primary"> Register </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Name"
              :rules="rules.fullname"
              v-model="form.fullname"
              type="string"
              required
            ></v-text-field>
            <v-text-field
              label="Email"
              :rules="rules.email"
              v-model="form.email"
              type="email"
              required
            ></v-text-field>
            <v-text-field
              label="Password"
              type="password"
              :rules="rules.password"
              v-model="form.password"
              required
            ></v-text-field>
            <v-text-field
              label="Confirm Password"
              type="password"
              :rules="rules.password_confirmation"
              v-model="form.password_confirmation"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" type="submit"> Register </v-btn>
        </v-card-actions>
      </v-card>
      <div class="d-flex align-baseline">
        <p>Kamu belum punya akun ?</p>
        <v-btn
          text
          plain
          :ripple="false"
          to="/login"
          color="primary"
          class="pl-1"
        >
          login
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: "auth",
  data() {
    return {
      form: {
        fullname: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      rules: {
        fullname: [(v) => !!v || "Fullname is required"],
        email: [
          (v) => !!v || "E-mail is required",
          (v) =>
            /[a-z0-9]+@[a-z}+.[a-z]{2,3}/.test(v) || "E-mail must be valid",
        ],
        password: [
          (v) => !!v || "Password is required",
          (v) => v.length >= 6 || "Password must be more than 6 characters",
        ],
        password_confirmation: [
          (v) => !!v || "Password Confirmation is required",
          (v) =>
            v === this.form.password ||
            "Password Confirmation must be the same as Password",
        ],
      },
    };
  },
};
</script>
