export interface profilesMessageType{
    name : string,
    icon : "User" | "Mail" |"FileText" |"Settings" | "LogOut" ,
    link : string
}

export const profilesMessage:profilesMessageType[] = [
    {
        name: "Account",
        icon:"User",
        link: `./users/usersprofile`
    },
    {
        name: "Inbox",
        icon:"Mail",
        link: `./email/emailapp`
    },
    {
        name: "Taskboard",
        icon:"FileText",
        link: `./apps/task`
    },
    {
        name: "Settings",
        icon:"Settings",
        link: `./users/usersedit`
    },
    {
        name: "Log Out",
        icon:"LogOut",
        link:`./login`
    },
];