import * as DataTypes from "../myDataTypes";

export const data: DataTypes.SidebarGroupings = {  // create an object literal (kind of like JSON)

    sidebarContentType: "Ethics",  // we use a colon, not an =, and a comma at the end
    sidebarGroups: [

        {   displayName: DataTypes.SectionNames.EthicsSection_EthicsOfTechnology,
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


        {   displayName: DataTypes.SectionNames.EthicsSection_History,
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


        {   displayName: DataTypes.SectionNames.EthicsSection_Philosophy,
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


        {   displayName: DataTypes.SectionNames.EthicsSection_AI,
            sidebarItems: [

        ] },


        {   displayName: DataTypes.SectionNames.EthicsSection_InTheNews,
            sidebarItems: [

        ] },

    ]
}