<template>
  <v-row>
    <v-col md="4" offset-md="4" cols="10" offset="1">
      <v-card>
        <v-toolbar dark color="primary"> Register </v-toolbar>
        <v-card-text>
          <v-form ref="form">
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
              @keydown="resetEmailExistMessage"
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
          <v-btn
            color="primary"
            type="submit"
            @click="onSubmit"
            :loading="isLoading"
          >
            Register
          </v-btn>
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
  middleware: ["unauthenticated"],
  data() {
    return {
      isLoading: false,
      emailExist: false,
      form: {
        fullname: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      rules: {
        fullname: [
          (v) => !!v || this.$t("FIELD_REQUIRED", { field: "fullname" }),
        ],
        email: [
          (v) => !!v || this.$t("FIELD_REQUIRED", { field: "email" }),
          (v) =>
            /[a-z0-9]+@[a-z}+.[a-z]{2,3}/.test(v) || this.$t("EMAIL_INVALID"),
          (v) => !this.emailExist || this.$t("EMAIL_EXIST"),
        ],
        password: [
          (v) => !!v || this.$t("FIELD_REQUIRED", { field: "password" }),
          (v) =>
            v.length >= 6 ||
            this.$t("FIELD_MIN", { field: "password", min: 6 }),
        ],
        password_confirmation: [
          (v) =>
            !!v || this.$t("FIELD_REQUIRED", { field: "konfirmasi password" }),
          (v) =>
            v === this.form.password ||
            this.$t("FIELD_CONFIRM", {
              fieldConfirm: "Konfirmasi password",
              field: "password",
            }),
        ],
      },
    };
  },
  methods: {
    resetEmailExistMessage() {
      this.emailExist = false;
    },
    async onSubmit() {
      try {
        if (this.$refs.form.validate()) {
          this.isLoading = true;
          const response = await this.$axios.$post("/register", this.form);
          if (response.message == "USER_REGISTER_SUCCESS") {
            // save access token to cookies
            this.$store.commit("auth/setAccessToken", response.accessToken);
            // save refresh token to cookies
            this.$store.commit("auth/setRefreshToken", response.refreshToken);
            // save fullname token to cookies
            this.$store.commit("auth/setFullname", response.fullname);
            // this.$router.push("/dasboard");
            this.$router.push({ name: `index___` + this.$i18n.locale });
          }
        }
      } catch (error) {
        console.log(error.response);
        if (error.response.data.message == "EMAIL_ALREADY_EXISTS") {
          this.emailExist = true;
          this.$refs.form.validate();
        }
      }
      this.isLoading = false;
    },
  },
};
</script>
