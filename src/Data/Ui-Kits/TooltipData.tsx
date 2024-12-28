import { HtmlTooltipData2, HtmlTooltipData3, HtmlTooltipData4 } from "../../utils/Constant";

export const colorTooltipData = [
    {
        class: 'secondary',
        text: 'Secondary'
    },
    {
        class: 'success',
        text: 'Success'
    },
    {
        class: 'warning',
        text: 'Warning'
    },
    {
        class: 'danger',
        text: 'Danger'
    }
]

interface TooltipPositionType {
    class: string;
    text: string;
    tooltip: string;
    position: "right" | "bottom" | "left";
}

export const tooltipPosition:TooltipPositionType[] = [
    {
        class: 'secondary',
        text: 'Tooltip on right',
        tooltip: 'Tooltip on right',
        position: 'right'
    },
    {
        class: 'success',
        text: 'Tooltip on bottom',
        tooltip: 'Tooltip on bottom',
        position: 'bottom'
    },
    {
        class: 'warning',
        text: 'Tooltip on left',
        tooltip: 'Tooltip on left',
        position: 'left'
    }
  ]

export const htmlTooltipData = [
    {
        class: 'warning',
        text: 'Last Warning',
        tooltip: <div dangerouslySetInnerHTML={{__html:HtmlTooltipData2}} />,
    },
    {
        class: 'danger',
        text: "It's Danger",
        tooltip: <div dangerouslySetInnerHTML={{__html:HtmlTooltipData3}} />,
    },
    {
        class: 'info',
        text: 'Coming soon',
        tooltip: <div dangerouslySetInnerHTML={{__html:HtmlTooltipData4}} />,
    }
]

export const flippedtooltipData = [
    {
        class: 'btn-outline-secondary',
        text: 'Tooltip Secondary',
        tooltip: 'Tooltip Secondary'
    },
    {
        class: 'btn-outline-success',
        text: 'Tooltip Success',
        tooltip: 'Tooltip Success'
    },
    {
        class: 'btn-outline-info',
        text: 'Tooltip Info',
        tooltip: 'Tooltip Info'
    }
]