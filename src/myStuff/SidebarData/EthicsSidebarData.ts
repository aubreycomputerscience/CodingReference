import * as DataTypes from "../myDataTypes";

export const data: DataTypes.SidebarGroupings = {  // create an object literal (kind of like JSON)

    sidebarContentType: "Ethics",  // we use a colon, not an =, and a comma at the end
    sidebarGroups: [

        {   displayName: DataTypes.SectionNames.EthicsSection_History,
            sidebarItems: [

                { 
                    displayName: "The Telephone",
                    pageName: "1_Telephone"
                },
                { 
                    displayName: "The Television",
                    pageName: "2_Television"
                },
                { 
                    displayName: "The Internet",
                    pageName: "2b_Internet"
                },
                { 
                    displayName: "Health, Wealth, & Happiness",
                    pageName: "0_HealthWealth"
                }
        ] },


        {   displayName: DataTypes.SectionNames.EthicsSection_Power,
            sidebarItems: [

                { 
                    displayName: "Control of People",
                    pageName: "3_ControlPeople"
                },
                { 
                    displayName: "Control of Data",
                    pageName: "4_ControlData"
                },
                                { 
                    displayName: "Social Engineering",
                    pageName: "5_SocialEngineering"
                },
        ] },

        {   displayName: DataTypes.SectionNames.EthicsSection_Responsiblity,
            sidebarItems: [

                { 
                    displayName: "Intro",
                    pageName: "6_EthicsIntro"
                },
                { 
                    displayName: "Moral Responsibility",
                    pageName: "7_Morality"
                },

                              { 
                    displayName: "Usage & Design",
                    pageName: "8_EthicsOfDesign"
                }
        ] },

        {   displayName: DataTypes.SectionNames.EthicsSection_AI,
            sidebarItems: [

        ] },


        {   displayName: DataTypes.SectionNames.EthicsSection_InTheNews,
            sidebarItems: [

                { 
                    displayName: "Articles",
                    pageName: "9_Articles"
                },
                { 
                    displayName: "Discussion Prompts",
                    pageName: "10_Prompts"
                }
            ] },

    ]
}