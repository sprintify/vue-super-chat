<template>
  <div class="container chat">
    <h2 class="message-heading">
      SPRINTIFY
      <span>CHAT</span>
    </h2>
    <div class="card">
      <div class="card-body">
        <p class="text-secondary nomessages" v-if="messages.length == 0">
          Enter message
        </p>
        <div class="messages">
          <div v-for="message in messages" :key="message.id">
            <span class="message-name">{{ message.name }} |</span>
            <span class="time">{{ message.timestamp }}</span>
            <span class="message-text">{{ message.message }}</span>
          </div>
        </div>
      </div>
      <div class="card-action">
        <CreateMessage :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import CreateMessage from "@/components/CreateMessage";
import fb from "@/firebase/init";
import moment from "moment";
export default {
  name: "Chat",
  props: ["name"],
  components: {
    CreateMessage
  },
  data() {
    return {
      messages: []
    };
  },
  created() {
    let ref = fb.collection("messages").orderBy("timestamp");
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            message: doc.data().message,
            timestamp: moment(doc.data().timestamp).fromNow()
          });
        }
      });
    });
  }
};
</script>

<style>
.container .message-heading {
  font-size: 1em;
  font-weight: 300;
  color: grey;
  margin-top: 5em;
  letter-spacing: 2px;
  /* text-transform: lowercase */
}
.container .message-heading span {
  font-weight: 900;
}
.container .card {
  border: none;
  margin-top: 2em;
}
.chat h2 {
  font-size: 2.6em;
  margin: 0px;
}
.chat h5 {
  margin-top: 0px;
  /* margin-bottom: 40px; */
}
.chat .message-name {
  font-weight: 900;
  font-size: 0.75em;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgb(233, 25, 60);
}
.chat .time {
  padding-left: 0.5em;
  font-size: 0.8em;
  color: #888;
}
.chat .message-text {
  font-size: 1em;
  display: block;
  margin-bottom: 20px;
  max-width: 600px;
}
.messages {
  /* max-height: 300px; */
  text-align: left;
  margin: 0 auto;
  /* overflow: auto; */
}
</style>
