// Assumes you've already requested the right to send web notifications
import consumer from "./consumer"

consumer.subscriptions.create({ channel: "ActivityChannel" }, {
  received(event) {
    const element = document.getElementById('events');
    element.insertAdjacentHTML("beforeend", event.message);
  }
})