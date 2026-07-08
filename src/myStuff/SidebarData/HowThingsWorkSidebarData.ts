import * as DataTypes from "../myDataTypes";

export const data: DataTypes.SidebarGroupings = {  // create an object literal (kind of like JSON)

    sidebarContentType: "HowThingsWork",  // we use a colon, not an =, and a comma at the end
    sidebarGroups: [

        {   displayName: DataTypes.SectionNames.HowDoesItWork_Internet,
            sidebarItems: [
                { 
                    displayName: "Network Stack",
                    pageName: "NetworkStack"
                },
                { 
                    displayName: "Routing",
                    pageName: "Routing"
                }
        ] },


        {   displayName: DataTypes.SectionNames.HowDoesItWork_CPU,
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


        {   displayName: DataTypes.SectionNames.HowDoesItWork_AI,
            sidebarItems: [

                { 
                    displayName: "Neural Nets",
                    pageName: "NeuralNet"
                },
                { 
                    displayName: "Training",
                    pageName: "Training"
                }
        ] },


    ]
}