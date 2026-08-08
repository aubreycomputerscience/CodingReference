import * as DataTypes from "../myDataTypes";

export const data: DataTypes.SidebarGroupings = {  // create an object literal (kind of like JSON)

    sidebarContentType: "Topics",  // we use a colon, not an =, and a comma at the end
    sidebarGroups: [

        {   displayName: DataTypes.SectionNames.CodingSection_Coding,
            sidebarItems: [
                { 
                    displayName: "Building",
                    pageName: "Arrays"
                },
                { 
                    displayName: "Operations",
                    pageName: "Loops"
                },
                { 
                    displayName: "Implementation",
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