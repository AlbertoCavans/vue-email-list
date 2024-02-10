const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      message: "Ciao! Ecco 10 email random!",
      emails: [],
    };
  },

  methods: {},

  mounted() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => {
          const email = resp.data.response;
          this.emails.push(email);
        });
    }
  },
});

app.mount("#app");
