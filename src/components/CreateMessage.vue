<template>
  <div class="container" style="margin-bottom: 30px">
    <form @submit.prevent="createMessage">
      <div class="form-group-message">
        <textarea
          type="text"
          name="message"
          class="form-control create"
          placeholder="Enter message ..."
          v-model="newMessage"
        ></textarea>
        <p class="text-danger error-text" v-if="errorText">{{ errorText }}</p>
        <div class="message-button">
          <button
            class="btn btn-primary btn-message"
            type="submit"
            name="action"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import fb from "@/firebase/init";
export default {
  name: "CreateMessage",
  props: ["name"],
  data() {
    return {
      newMessage: null,
      errorText: null
    };
  },
  methods: {
    createMessage() {
      if (this.newMessage) {
        fb.collection("messages")
          .add({
            message: this.newMessage,
            name: this.name,
            timestamp: Date.now()
          })
          .catch(err => {
            console.log(err);
          });
        this.newMessage = null;
        this.errorText = null;
      } else {
        this.errorText = "ENTER MESSAGE";
      }
    }
  }
};
</script>

<style>
.error-text {
  font-weight: 900;
  font-size: 0.7em;
  letter-spacing: 4px;
  margin-top: 1em;
}
form .form-group-message {
  max-width: 500px;
}
.form-group-message .form-control.create {
  max-width: 500px;
  margin-bottom: 1em;
  min-height: 120px;
}
.form-control-create {
  border: 1.5px solid #ddd;
  border-radius: .25rem;
  padding-top: 5px;
  padding-left: 10px;
}
.message-button {
  display: flex;
  justify-content: flex-end;
  max-width: 500px;
}
button.btn-message {
  background-color: rgba(78, 99, 154, 1);
  border: none;
  font-size: 1em;
  padding: 5px 15px;
  text-align: right;
  margin: 0;
  transition: all 250ms ease-in-out;
  
  margin-bottom: 2em;
}
button.btn-message:hover {
  background-color: rgba(9, 54, 112, 0.9);
}
</style>
