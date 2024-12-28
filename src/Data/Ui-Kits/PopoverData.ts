export interface PopoverDataTypes{
    color: string;
    id: string;
    placements: "right" | "bottom" | "left";
    title: string;
    description: string;
}
export const popoverData:PopoverDataTypes[] = [
    {
        color:"danger",
        id:"popover5",
        placements:"right",
        title:"Popover On Right",
        description:"Popovers are opt-in for effectiveness causes, in this way you have to initialize them yourself."
    },
    {
        color:"info",
        id:"popover6",
        placements:"bottom",
        title:"Popover On bottom",
        description:"Identify container:to evade rendering problems in more complex components (like Bootstrap input groups, button groups, etc)."
    },
    {
        color:"dark",
        id:"popover7",
        placements:"left",
        title:"Popover On Left",
        description:"Popovers are opt-in for effectiveness causes, in this way you have to initialize them yourself."
    }
]