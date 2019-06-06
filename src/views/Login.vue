<template>
  <div class="container">
    <div class="card login">
      <div class="card-body">
        <h4 class="card-title">Login</h4>
        <form @submit.prevent="login" class="form-login">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Chat with sprintify..."
              name="name"
              v-model="name"
            />
            <p v-if="errorText" class="text-danger text-error">
              {{ errorText }}
            </p>
          </div>
          <div class="btn-flex">
            <button type="submit" class="btn btn-primary btn-login">
              Enter Chat
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      name: "",
      errorText: null
    };
  },
  methods: {
    login() {
      if (this.name) {
        this.$router.push({ name: "Chat", params: { name: this.name } });
      } else {
        this.errorText = "Enter your first name";
      }
    }
  }
};
</script>

<style>
.login {
  max-width: 500px;
  margin-top: 50px;
  display: block;
}
form.form-login {
  display: block;
  padding: 0;
}
input.form-control {
  border: 1.5px solid #ddd;
}
.text-error {
  font-weight: 900;
  font-size: 0.7em;
  letter-spacing: 4px;
  margin-top: 1em;
  text-transform: uppercase;
}
.btn-flex {
  display: flex;
  justify-content: flex-end;
}
button.btn-login {
  background-color: rgba(78, 99, 154, 1);
  border: none;
  font-size: 1em;
  padding: 5px 15px;
  text-align: right;
  margin: 0;
  transition: all 250ms ease-in-out;
}
button.btn-login:hover {
  background-color: rgba(9, 54, 112, 0.9);
}
.card-title {
  text-align: left;
}
input.form-control {
  font-size: 1em;
}
</style>
