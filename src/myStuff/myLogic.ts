import * as MyUIElements from "./myUIElements";

// global variables
const content = document.getElementById("content")!;  // get a reference that allows us to access the html element named content
const defaultPageContentName = "DefaultContent";

export async function loadSelectedPage() {

    ifHeaderSelected_UpdateSidebar()
    await fetchNewContentAfterSidebarSelection();
}

function ifHeaderSelected_UpdateSidebar() {
    
    const urlInfo = window.location;  // ask the system for the url info
    const pageName = urlInfo.hash;  // if we have myURL/#myPageName, the window will store this info using the confusing variable name "hash"
    
    switch (pageName) {  // convert hmtl tag to what using here (brittle, but no great way to do this)
        case "#SoftwareDevelopment":
            MyUIElements.generateCodingSidebar("SoftwareDevelopment");
            break;
        case "#HowThingsWork":
            MyUIElements.generateCodingSidebar("HowThingsWork");
            break;
        case "#Topics": 
            MyUIElements.generateCodingSidebar("Topics");
            break;
        case "#Ethics":
            MyUIElements.generateCodingSidebar("Ethics");
            break;
    }
}

//#region Fetch Content
async function fetchNewContentAfterSidebarSelection() {

    // 1. figure page/url we want to go to 
    const fileLocationURL = buildFileLocationURL()
    
    // 2. ask the browser to go to that url to get the data (locally or online)
    const response = await fetch(fileLocationURL);  // we need to wait until the browser gets the data
    
    // 3. unpack the data
    const html = await response.text();  // after receiving a response, the program will resume
                                         // the response from will contain lots of info, we just want the text
    // 4. update our html
    if (!response.ok) {
        content.innerHTML = "<h2>Page Coming Soon</h2>";
    } else {
        content.innerHTML = html;
    }
    
}

function buildFileLocationURL(): string {

    const urlInfo = window.location;  // ask the system for the url info
    const pageName = urlInfo.hash || "ERROR";  // if we have myURL/#myPageName, the window will store this info using the confusing variable name "hash"
    const correctedPageName = pageName.slice(1); // remove the # from myPageName (slice chops off the beginning of a word)
    const pageNameComponents = correctedPageName.split("/");

        // PAGE NAME COMPONENT EXAMPLE
        // ["SoftwareDevelopment",  // our sidebar type
        //  "Coding",               // this is just added to the address bar for display
        //  "Arrays"]               // our page content

    const contentType = pageNameComponents[0] ?? "SoftwareDevelopment";
    const fileName = pageNameComponents[2] ?? defaultPageContentName;
    const fileLocation = "/" + contentType + "/" + fileName + ".html";  // note: html needs to go in the public folder, not src                                                            
  
    console.log(pageNameComponents);
    console.log(fileLocation)

    return fileLocation;

    // 1) we could have done this all in one line of code
    //    this is probability a little wordy, but don't love doing it in one line because hard to read and understand
    // 2) if this stops working, you can always add a print/console.log statement
    //      console.log(pageNameComponents);
    //      console.log(fileLocation)
    //    if you go to the preview, right click / inspect, you can see what page is loaded
}