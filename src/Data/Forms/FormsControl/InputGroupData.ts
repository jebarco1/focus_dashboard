export interface InputGroupButtonTypes {
    name?: string;
    divider?: boolean;
}

export const firstButtonsWithDropDowns:InputGroupButtonTypes[] = [
    { name: "Ecommerce" },
    { name: "Email" },
    { name: "Users" },
    { divider: true },
    { name: "Bookmarks" },
  ];
  
  export const secondButtonsWithDropDowns:InputGroupButtonTypes[] = [
    { name: "Starter kit" },
    { name: "Gallery" },
    { name: "Blog" },
    { divider: true },
    { name: "Maps" },
  ];
  export const thirdButtonsWithDropDowns:InputGroupButtonTypes[] = [
    { name: "Widgets" },
    { name: "Project" },
    { name: "Contacts" },
    { divider: true },
    { name: "Tasks" },
  ];
  export const fourthButtonsWithDropDowns:InputGroupButtonTypes[] = [
    { name: "To-Do" },
    { name: "FAQ" },
    { name: "Knowledgebase" },
    { divider: true },
    { name: "Support Ticket" },
  ];

  export const firstSegmentedButtonsDropDowns:InputGroupButtonTypes[] = [
    { name: "Learning" },
    { name: "Editors" },
    { name: "Users" },
    { divider: true },
    { name: "Social App" },
  ];
  export const secondSegmentedButtonsDropDowns:InputGroupButtonTypes[] = [
    { name: "Search Result" },
    { name: "Tasks" },
    { name: "Projects" },
    { divider: true },
    { name: "Animation" },
  ];