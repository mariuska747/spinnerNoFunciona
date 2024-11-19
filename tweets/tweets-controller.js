// nexo de unión entre el modelo y la vista

import { getTweets } from "./tweets-model.js";
import { buildTweet, buildEmptyTweetList } from "./tweets-view.js";

function drawTweets(tweets, tweetsContainer) {
  if(!tweets.length) {
    tweetsContainer.innerHTML = buildEmptyTweetList();
  } else {
    tweets.forEach(tweet => {
      const newTweet = buildTweet(tweet);
      tweetsContainer.appendChild(newTweet);
    })
  }
}

function fireEvent(message, type, element) {
  const customEvent = new CustomEvent("loading-tweets-info", {
    detail: {
      message,
      type,
    }
  });
  element.dispatchEvent(customEvent);
}


function spinnerOnOff(htmlElement, classType){
  const customEvent = new CustomEvent("spinner-on-off", {
    detail:{classType}
  })
  htmlElement.dispatchEvent(customEvent)
}


export async function tweetsController(tweetsContainer) {
  const spinner = document.querySelector('#spinner-container')
  tweetsContainer.innerHTML = "";

    //spinner.classList.toggle('hidden');
    spinnerOnOff(spinner,"hidden")
  try {
    const tweets = await getTweets();
    fireEvent("tweets cargados correctamente", "success", tweetsContainer);
    drawTweets(tweets, tweetsContainer)
  } catch (error) {
    // alert(error.message)
    fireEvent(error.message, "error", tweetsContainer);
  } finally {
    //spinner.classList.toggle('hidden');
    spinnerOnOff(spinner,"hidden")
  }
}
