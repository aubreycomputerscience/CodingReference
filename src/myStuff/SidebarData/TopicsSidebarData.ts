import * as DataTypes from "../myDataTypes";

export const data: DataTypes.SidebarGroupings = {  // create an object literal (kind of like JSON)

    sidebarContentType: "Topics",  // we use a colon, not an =, and a comma at the end
    sidebarGroups: [

        {   displayName: DataTypes.SectionNames.Topics_Careers,
            sidebarItems: [
                { 
                    displayName: "Careers",
                    pageName: "Careers"
                },

        ] },

        {   displayName: DataTypes.SectionNames.Topics_Other,
            sidebarItems: [
                { 
                    displayName: "Money Week 1",
                    pageName: "_Money_W1"
                },
                                { 
                    displayName: "MM Rubric",
                    pageName: "_MM_Rubric"
                },
                { 
                    displayName: "CS Week 1",
                    pageName: "_CS_W1"
                },

        ] },

    ]
}