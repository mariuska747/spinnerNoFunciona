import { notificationController } from "./notifications/notifications-controller.js";
import { tweetsController } from "./tweets/tweets-controller.js";

document.addEventListener("DOMContentLoaded", () => {

  const tweetsContainer = document.querySelector("#tweets-container");
  const notificationsContainer = document.querySelector("#notifications-container");

  tweetsController(tweetsContainer)
  const { showNotification } = notificationController(notificationsContainer)

  tweetsContainer.addEventListener("loading-tweets-info", (event) => {
    showNotification(event.detail.message, event.detail.type);
  })
})
