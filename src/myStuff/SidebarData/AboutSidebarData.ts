import * as DataTypes from "../myDataTypes";

export const data: DataTypes.SidebarGroupings = {  // create an object literal (kind of like JSON)

    sidebarContentType: "About",  // we use a colon, not an =, and a comma at the end
    sidebarGroups: [

         {   displayName: DataTypes.SectionNames.About_Overview,
            sidebarItems: [
                { 
                    displayName: "Syllabus",
                    pageName: "syllabus"
                },
        ] },

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
        ] },

    ]
}