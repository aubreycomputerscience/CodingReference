import './style.css'
import * as myCode from './myStuff/myCode.ts'
import { CodeBoxController } from './myStuff/CodeBox.ts';

if ("serviceWorker" in navigator) {  // in order to run as a Progressive Web App, you have to have a service worker, even if it doesn't do anything
  navigator.serviceWorker.register("/sw.js");
}

// add custom widgets we can insert into our code
customElements.define(
    "codebox-controller",  // must have a "-" to run
    CodeBoxController
);

myCode.startApp()
