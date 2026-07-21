import * as DataTypes from "../myDataTypes";

export const data: DataTypes.SidebarGroupings = {  // create an object literal (kind of like JSON)

    sidebarContentType: "SoftwareDevelopment",  // we use a colon, not an =, and a comma at the end
    sidebarGroups: [


        {   displayName: DataTypes.SectionNames.CodingSection_ProgramStructure,
            sidebarItems: [

                { 
                    displayName: "Web Apps",
                    pageName: "_1_PWA"
                },
                
                { 
                    displayName: "New Project",
                    pageName: "_2_NewProject"
                },
 
                                { 
                    displayName: "Modules",
                    pageName: "_3_Modules"
                },
                 
                { 
                    displayName: "Debugging",
                    pageName: "_4_Debugging"
                },  
                
                { 
                    displayName: "Data Storage",
                    pageName: "_5_DataStorage"
                },   
                
                { 
                    displayName: "Games",
                    pageName: "_6_Games"
                }, 

                { 
                    displayName: "Navigation",
                    pageName: "_8_Navigation"
                }, 
                 
                { 
                    displayName: "Networking",
                    pageName: "_9_Networking"
                },               
                            
        ] },

        {   displayName: "UI",
            sidebarItems: [
                                { 
                    displayName: "Adding UI",
                    pageName: "ui_1_AddingUI"
                },
                { 
                    displayName: "User Input",
                    pageName: "ui_2_UserInput"
                },
                { 
                    displayName: "Tables",
                    pageName: "ui_3_Tables"
                },
                { 
                    displayName: "Layout",
                    pageName: "ui_6_Layout"
                },
                { 
                    displayName: "HTML",
                    pageName: "ui_7_HTML"
                },
                { 
                    displayName: "CSS",
                    pageName: "ui_5_CSS"
                },

        ] },

        {   displayName: DataTypes.SectionNames.CodingSection_Coding,
            sidebarItems: [
                { 
                    displayName: "Variables & Types",
                    pageName: "1_Variables"
                },
                { 
                    displayName: "References",
                    pageName: "2_References"
                },
                               { 
                    displayName: "Strings",
                    pageName: "3_Strings"
                },
                               { 
                    displayName: "Math",
                    pageName: "4_Math"
                },
                { 
                    displayName: "Functions",
                    pageName: "5_Functions"
                },
                               { 
                    displayName: "If... Then",
                    pageName: "7_IfThen"
                },
                               { 
                    displayName: "Loops",
                    pageName: "8_Loops"
                },
                               
                               { 
                    displayName: "Object Literals",
                    pageName: "9-ObjectLiterals"
                },
                { 
                    displayName: "Classes",
                    pageName: "11_Classes"
                },

        ] },

        {   displayName: DataTypes.SectionNames.CodingSection_DataStructures,
            sidebarItems: [
            { 
                    displayName: "Arrays",
                    pageName: "a_Arrays"
                },
                               { 
                    displayName: "Dictionaries",
                    pageName: "b_Dictionaries"
                },
                               { 
                    displayName: "Sets",
                    pageName: "c_Sets"
                },

                                { 
                    displayName: "Trees",
                    pageName: "f_Trees"
                },
                
        ] },
                
        {   displayName: DataTypes.SectionNames.CodingSection_Algorithms,
            sidebarItems: [
                { 
                    displayName: "Complexity",
                    pageName: "d_Complexity"
                },
                { 
                    displayName: "Sorts",
                    pageName: "e_Sorts"
                },
                                                { 
                    displayName: "Mazes",
                    pageName: "g_Mazes"
                },
        ] },




        // {   displayName: "Frameworks",
        //     sidebarItems: [

        //         { 
        //             displayName: "css",
        //             pageName: "css"
        //         },
        //         { 
        //             displayName: "ui",
        //             pageName: "ui"
        //         }
        // ] },


        // {   displayName: "Coding",
        //     sidebarItems: [

        //                                         { 
        //             displayName: "css",
        //             pageName: "css"
        //         },
        //         { 
        //             displayName: "ui",
        //             pageName: "ui"
        //         }
        // ] },


        // {   displayName: "Services",
        //     sidebarItems: [

        // ] },




        // {   displayName: "Web",
        //     sidebarItems: [

        // ] }
    ]
}