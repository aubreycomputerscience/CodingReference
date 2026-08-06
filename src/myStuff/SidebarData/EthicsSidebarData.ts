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
                    pageName: "comingSoon" /* "3_ControlPeople" */
                },
                { 
                    displayName: "Control of Data",
                    pageName: "comingSoon" /* "4_ControlData" */
                },
                                { 
                    displayName: "Social Engineering",
                    pageName: "comingSoon" /* "5_SocialEngineering" */
                },
        ] },

        {   displayName: DataTypes.SectionNames.EthicsSection_Responsiblity,
            sidebarItems: [

                { 
                    displayName: "Intro",
                    pageName: "comingSoon" /* "6_EthicsIntro" */
                },
                { 
                    displayName: "Moral Responsibility",
                    pageName: "comingSoon" /* "7_Morality" */
                },

                              { 
                    displayName: "Usage & Design",
                    pageName: "comingSoon" /* "8_EthicsOfDesign" */
                }
        ] },

        {   displayName: DataTypes.SectionNames.EthicsSection_AI,
            sidebarItems: [

        ] },


        {   displayName: DataTypes.SectionNames.EthicsSection_InTheNews,
            sidebarItems: [

                { 
                    displayName: "Articles",
                    pageName: "comingSoon" /* "9_Articles" */
                },
                { 
                    displayName: "Discussion Prompts",
                    pageName: "comingSoon" /* "10_Prompts" */
                }
            ] },

    ]
}