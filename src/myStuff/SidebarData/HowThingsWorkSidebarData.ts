import * as DataTypes from "../myDataTypes";

export const data: DataTypes.SidebarGroupings = {  // create an object literal (kind of like JSON)

    sidebarContentType: "HowThingsWork",  // we use a colon, not an =, and a comma at the end
    sidebarGroups: [

        {   displayName: DataTypes.SectionNames.HowDoesItWork_Hardware,
            sidebarItems: [

                { 
                    displayName: "Overview",
                    pageName: "ComputerHardware"
                },
     
        ] },

        {   displayName: DataTypes.SectionNames.HowDoesItWork_Internet,
            sidebarItems: [
                { 
                    displayName: "Networks",
                    pageName: "Networking1Basics" 
                },

                { 
                    displayName: "Applications",
                    pageName: "Networking2Applications" /* "NetworkStack" */
                },
                
                { 
                    displayName: "Architecture",
                    pageName: "Networking3Architecture" /* "NetworkStack" */
                },
                
                { 
                    displayName: "Top Layers",
                    pageName: "Networking4TopLayers" /* "NetworkStack" */
                },
                
                { 
                    displayName: "Mac Addresses",
                    pageName: "comingSoon" /* "NetworkStack" */
                },
                { 
                    displayName: "Routing",
                    pageName: "comingSoon" /* "NetworkStack" */
                },
                { 
                    displayName: "Blockchain",
                    pageName: "comingSoon" /* "Routing" */
                }
        ] },





        {   displayName: DataTypes.SectionNames.HowDoesItWork_AI,
            sidebarItems: [

                { 
                    displayName: "Neural Nets",
                    pageName: "comingSoon" /* "NeuralNet" */
                },
                { 
                    displayName: "Training",
                    pageName: "comingSoon" /* "Training" */
                }
        ] },


    ]
}