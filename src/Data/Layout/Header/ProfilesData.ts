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