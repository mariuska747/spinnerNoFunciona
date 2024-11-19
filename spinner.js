import { spinnerController } from "./spinner/spinner-controller.js"
import { tweetsController } from "./tweets/tweets-controller.js"

document.addEventListener("DOMContentLoaded", ()=>{

    const spinner = document.querySelector('#spinner-container');
    const tweetsContainer = document.querySelector("#tweets-container");

    tweetsController(tweetsContainer)

    spinner.addEventListener("spinner-on-off", event =>{
        let style = event.detail.classType;
        const spinnerSection = document.querySelector("#spinner")
        if(style === ""){
            style  = "hidden"
        }else if(style  === "hidden"){
            style  = ""
        }
        spinnerSection.spinnerController(style)
    })
    //spinnerController("hidden")
    
})