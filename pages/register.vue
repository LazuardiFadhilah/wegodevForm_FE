<template>
  <v-row>
    <v-col md="4" offset-md="4" cols="10" offset="1">
      <v-card>
        <v-toolbar dark color="primary"> Register </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field label="Email" type="email" required></v-text-field>
            <v-text-field
              label="Password"
              type="password"
              required
            ></v-text-field>
            <v-text-field
              label="Confirm Password"
              type="password"
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
};
</script>
