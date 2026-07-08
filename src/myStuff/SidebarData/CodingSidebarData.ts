import * as DataTypes from "../myDataTypes";

export const data: DataTypes.SidebarGroupings = {  // create an object literal (kind of like JSON)

    sidebarContentType: "SoftwareDevelopment",  // we use a colon, not an =, and a comma at the end
    sidebarGroups: [

        {   displayName: "Coding",
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


        {   displayName: "Program Structure",
            sidebarItems: [

        ] },


        {   displayName: "Web",
            sidebarItems: [

        ] }
    ]
}