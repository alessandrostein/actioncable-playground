// Assumes you've already requested the right to send web notifications
import consumer from "./consumer"

consumer.subscriptions.create({ channel: "ActivityChannel" }, {
  received(event) {
    console.log(event);
    const el = document.getElementById('notice');
    el.insertAdjacentHTML("beforeend", event.message);
  }
})