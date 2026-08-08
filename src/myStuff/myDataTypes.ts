export{};

export type SidebarGroupings = {
    sidebarContentType: SidebarContentType;
    sidebarGroups: SidebarGroup[];
};

export type SidebarGroup = {
    displayName: SectionNames;
    sidebarItems: SidebarItem[];
};

export type SidebarItem = {
    displayName: string;
    pageName: string;
};


// STRINGS
export type SidebarContentType = "SoftwareDevelopment" | "HowThingsWork" | "Topics" | "Ethics" | "About";  // this the standard approach in TypeScript, but leaves a great deal to be desired


// CODING SECTION NAMES
export const SectionNames = {  // alternatively, it is popular to create object to use like enums (another option would be to change compiler settings to allow enums)
                              
    CodingSection_Coding: "Coding", 
    CodingSection_DataStructures: "Data Structures",
    CodingSection_Algorithms: "Algorithms",
    CodingSection_UI: "UI", 
    CodingSection_Frameworks: "Frameworks", 
    CodingSection_Services: "Services", 
    CodingSection_ProgramStructure: "Apps",
    CodingSection_Web: "Web",

    EthicsSection_History: "Historical Impact",
    EthicsSection_Power: "Power & Control",
    EthicsSection_Responsiblity: "Responsibility",
    EthicsSection_AI: "AI",
    EthicsSection_InTheNews: "In the News",

    HowDoesItWork_Internet: "The Internet",
    HowDoesItWork_CPU: "CPU",
    HowDoesItWork_AI: "AI",

    About_Standards: "Standards",
    About_Overview: "About",

    Topics_Careers: "Careers",

} as const;

export type SectionNames = typeof SectionNames[keyof typeof SectionNames];  // kind of wacky, don't think about too much

