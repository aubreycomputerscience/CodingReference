import * as DataTypes from "../myDataTypes";

export const data: DataTypes.SidebarGroupings = {  // create an object literal (kind of like JSON)

    sidebarContentType: "Topics",  // we use a colon, not an =, and a comma at the end
    sidebarGroups: [

        {   displayName: DataTypes.SectionNames.Topics_APCSP,
            sidebarItems: [
                { 
                    displayName: "arrays",
                    pageName: "Arrays"
                },
                { 
                    displayName: "Loops",
                    pageName: "Loops"
                }
        ] },


        {   displayName: "UI",
            sidebarItems: [
                                { 
                    displayName: "css",
                    pageName: "css"
                },
                { 
                    displayName: "ui",
                    pageName: "ui"
                }
        ] },


        {   displayName: "Frameworks",
            sidebarItems: [

                { 
                    displayName: "css",
                    pageName: "css"
                },
                { 
                    displayName: "ui",
                    pageName: "ui"
                }
        ] },


        {   displayName: "Coding",
            sidebarItems: [

                                                { 
                    displayName: "css",
                    pageName: "css"
                },
                { 
                    displayName: "ui",
                    pageName: "ui"
                }
        ] },


        {   displayName: "Services",
            sidebarItems: [

        ] },


        {   displayName: "Web",
            sidebarItems: [

        ] }
    ]
}