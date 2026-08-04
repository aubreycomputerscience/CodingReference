
// Note: This is a simple, standalone app, so we store references to html elements. 
// If the page was being reloaded, this wouldn't work. We would need to store the id and then
// lookup the corresponding html element. 
// Generally speaking, for complex UI, we need to store the state and "rebuild the UI." While 
// having advantages, it may also increase complexity.

import * as DataTypes from "./myDataTypes";
import * as CodingSidebarData from "./SidebarData/CodingSidebarData";
import * as HowThingsWorkdSidebarData from "./SidebarData/HowThingsWorkSidebarData";
import * as TopicsSidebarData from "./SidebarData/TopicsSidebarData";
import * as EthicsSidebarData from "./SidebarData/EthicsSidebarData";
import * as AboutSidebarData from "./SidebarData/AboutSidebarData";

const sidebarElement = document.getElementById("sidebar");
let lastSelectItem: HTMLDivElement | undefined;

const allSidebarData= new Map(  // store sidebar data as a dictionary
    
    // pass in an array of items to convert (unlike most languages, TypeScript doesn't allow you to do it directly)
    [  
        // each dictinary entry has a key and a value, create an array to store (compared to other programming languages, this is really sloppy)
        [CodingSidebarData.data.sidebarContentType,         CodingSidebarData.data],
        [HowThingsWorkdSidebarData.data.sidebarContentType, HowThingsWorkdSidebarData.data],
        [TopicsSidebarData.data.sidebarContentType,         TopicsSidebarData.data],
        [EthicsSidebarData.data.sidebarContentType,         EthicsSidebarData.data],
        [AboutSidebarData.data.sidebarContentType,          AboutSidebarData.data]
    ]);

export function generateCodingSidebar(sidebarContentType: DataTypes.SidebarContentType) {
 
    // build all the sidebar elements corresponding to the header link
    // we will just hide stuff we don't want to see right now
    const sidebarData = allSidebarData.get(sidebarContentType) ?? CodingSidebarData.data;
    let sidebarViews: Array<HTMLElement> = [];

    for (const sidebarGroup of sidebarData.sidebarGroups) {
 
        const sectionContainerView = document.createElement("div");
        sectionContainerView.style.display = "none";  
        sectionContainerView.style.flexDirection = "column";
     
        const sectionTitleButton = document.createElement("button");
        sectionTitleButton.classList.add("sidebarElement", "sidebarButton");
        sectionTitleButton.textContent = sidebarGroup.displayName;
        sectionTitleButton.onclick = () => {
            updateSidebarOnSidebarTitleSelected(sectionContainerView);
        }

        for (const sidebarItem of sidebarGroup.sidebarItems) {

            const sidebarElement = document.createElement("a");
            sidebarElement.textContent = sidebarItem.displayName;
            sidebarElement.href = buildHashURL({ sidebarContentType: sidebarContentType, sidebarGroupName: sidebarGroup.displayName, sidebarItemName: sidebarItem.pageName });
            sidebarElement.classList.add("sidebarElement", "sidebarItem");
            sectionContainerView.append(sidebarElement);
        }

        sidebarViews.push(sectionTitleButton, sectionContainerView)
    }

    sidebarElement?.replaceChildren(...sidebarViews);
}

export function buildHashURL(info: { sidebarContentType: DataTypes.SidebarContentType, sidebarGroupName: string, sidebarItemName: string } ) {
    
    const hashURL = "#" + info.sidebarContentType + "/"+ info.sidebarGroupName + "/" + info.sidebarItemName;
    return hashURL
}

function updateSidebarOnSidebarTitleSelected(sectionContainerView: HTMLDivElement) {

    const sectionNotShown = (sectionContainerView.style.display == "none");
      
    // if the section is not being show, show it
    if (sectionNotShown) {

        // hide last
        if (lastSelectItem !== undefined) {
           lastSelectItem.style.display = "none";
        }
        
        // show new
        sectionContainerView.style.display = "flex";
        lastSelectItem = sectionContainerView;

    } else {
        sectionContainerView.style.display = "none";
    }
}
