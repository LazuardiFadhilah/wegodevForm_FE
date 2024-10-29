export default function ({ $axios, redirect, store }) {
  $axios.onRequest((config) => {
    if (store.state.auth.accessToken) {
      config.headers[
        "Authorization"
      ] = `Bearer ${store.state.auth.accessToken}`;
    }
    if (config.headers.Autosave) {
      console.log("Mulai proses penyimpanan otomatis");
      store.commit("saves/start");
    }
  });

  $axios.onResponse((response) => {
    if (response.config.headers.Autosave) {
      console.log("selesai proses penyimpanan otomatis");
      store.commit("saves/success");
    }
  });

  $axios.onResponseError(async (error) => {
    try {
      if (response.config.headers.Autosave) {
        store.commit("saves/failed");
      }
      if (
        error.response.data.message === "REFRESH_TOKEN_EXPIRED" ||
        error.response.data.message === "INVALID_REFRESH_TOKEN"
      ) {
        throw new Error("LOGOUT");
      }

      if (
        error.response.status === 401 &&
        error.response.data.message === "ACCESS_TOKEN_EXPIRED"
      ) {
        let refreshToken = store.state.auth.refreshToken;

        const response = await $axios.$post("/refresh-token", {
          refreshToken: refreshToken,
        });
        if (!response) {
          throw new Error("LOGOUT");
        }
        console.log(response);
        store.commit("auth/setAccessToken", response.accessToken);
        store.commit("auth/setRefreshToken", response.refreshToken);

        let originalRequest = error.config;

        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${response.accessToken}`;
        return $axios(originalRequest);
      } else {
        return Promise.reject(error);
      }
    } catch (error) {
      if (error.message === "LOGOUT") {
        return redirect("/logout");
      }
    }
  });
}
