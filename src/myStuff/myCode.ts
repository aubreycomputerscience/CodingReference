import * as myLogic from "./myLogic.ts";
import * as UI from "./myUIElements.ts";

export function startApp() { 

    // build the sidebar
    UI.generateCodingSidebar("SoftwareDevelopment");

    // update the url address in the url bar (this won't do anything else)
    location.hash = "SoftwareDevelopment";  

    // based on the url, now we can load the page body content
    myLogic.loadSelectedPage();

    // if the url is updated, rebuild as needed 
    window.addEventListener("hashchange", myLogic.loadSelectedPage);  // hash change refers to the /#page part of the url
}

// NOTES:
// This is a one page app, with sidebar and content sections. When you select
// an item in the sidebar, the webpage will show corresponding text detail.
// 
// When you select the sidebar, it will change the url. Rather than acutally
// changing the page, we will simply look up the information we need and, 
// more or less, paste it into our app. The advantage of this approach is
// that it allows us to keep everything simple, we can split our text content
// into different files (otherwise we get a huge mess), and because we are 
// changing the url, users can access content using the address bar, meaning
// that they can send you a url or bookmark it. 



