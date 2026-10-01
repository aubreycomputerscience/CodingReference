import * as DataTypes from "../myDataTypes";

export const data: DataTypes.SidebarGroupings = {  // create an object literal (kind of like JSON)

    sidebarContentType: "About",  // we use a colon, not an =, and a comma at the end
    sidebarGroups: [


        {   displayName: DataTypes.SectionNames.About_Standards,
            sidebarItems: [              
                { 
                    displayName: "Year I",
                    pageName: "cs1"
                },
                { 
                    displayName: "Year II",
                    pageName: "cs2"
                },
                                { 
                    displayName: "Year III",
                    pageName: "cs3"
                },
                { 
                    displayName: "Principles of IT",
                    pageName: "pit"
                }, 
        ] },

        {   displayName: DataTypes.SectionNames.About_CS1Projects,
            sidebarItems: [
                { 
                    displayName: "Hello World",
                    pageName: "Project1_Hello"
                },
                { 
                    displayName: "On Click",
                    pageName: "Project2_OnClick"
                },
                { 
                    displayName: "Move Player",
                    pageName: "Project3_MovePlayer"
                },


                { 
                    displayName: "- follow along",
                    pageName: "Project3a_FollowAlong"
                },               
                { 
                    displayName: "- if else",
                    pageName: "Project3b_IfElse"
                },                
                { 
                    displayName: "- scrolling game",
                    pageName: "Project3c_ScrollingGame"
                },                
                { 
                    displayName: "- options",
                    pageName: "Project3d_Options"
                },                
                { 
                    displayName: "- demo",
                    pageName: "Project3e_Demo"
                },                
         


                { 
                    displayName: "User Input",
                    pageName: "Project4a_UserInput"
                },
                                { 
                    displayName: "- login page",
                    pageName: "Project4b_LoginPage"
                },
                { 
                    displayName: "- test",
                    pageName: "Project4c_Test"
                },
                { 
                    displayName: "- settings page",
                    pageName: "Project4d_SettingsPage"
                },


                { 
                    displayName: "Final Project",
                    pageName: "Project5_FinalProject"
                },
                
        ] },

        
        {   displayName: DataTypes.SectionNames.About_CS1ProjectsB,
            sidebarItems: [
                { 
                    displayName: "Display List",
                    pageName: "Unit2_DisplayArray"
                },
                
        ] },



        {   displayName: DataTypes.SectionNames.About_Overview,
            sidebarItems: [
                { 
                    displayName: "Mr. Cline",
                    pageName: "mrc"
                },
                { 
                    displayName: "Full Syllabus",
                    pageName: "syllabus"
                },
                { 
                    displayName: "Rubric",
                    pageName: "Rubric"
                },
                { 
                    displayName: "Demo Format",
                    pageName: "DemoFormat"
                },
                
        ] },

    ]
}