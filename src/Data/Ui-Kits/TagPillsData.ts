export const badgesData= [
    {
        class: 'secondary',
        text: 'Secondary'
    },
    {
        class: 'success',
        text: 'Success'
    },
    {
        class: 'info',
        text: 'Info'
    },
    {
        class: 'warning text-dark',
        text: 'Warning'
    },
    {
        class: 'danger',
        text: 'Danger'
    },
    {
        class: 'light text-dark',
        text: 'Light'
    },
    {
        class: 'dark tag-pills-sm-mb',
        text: 'Dark'
    }
]

export const pillsData = [
    {
        class: 'secondary',
        text: 'Secondary'
    },
    {
        class: 'success',
        text: 'Success'
    },
    {
        class: 'info',
        text: 'Info'
    },
    {
        class: 'warning text-dark',
        text: 'Warning'
    },
    {
        class: 'danger',
        text: 'Danger'
    },
    {
        class: 'light text-dark',
        text: 'Light'
    },
    {
        class: 'dark tag-pills-sm-mb',
        text: 'Dark'
    }
]

export const numberBadgesData = [
    {
        class: 'secondary',
        text: '2'
    },
    {
        class: 'success',
        text: '3'
    },
    {
        class: 'info',
        text: '4'
    },
    {
        class: 'warning text-dark',
        text: '5'
    },
    {
        class: 'danger',
        text: '6'
    },
    {
        class: 'light text-dark',
        text: '7'
    },
    {
        class: 'dark text-light',
        text: '8'
    }
]

export const numberPillsData = [
    {
        class: 'secondary',
        text: '2'
    },
    {
        class: 'success',
        text: '3'
    },
    {
        class: 'info',
        text: '4'
    },
    {
        class: 'warning text-dark',
        text: '5'
    },
    {
        class: 'danger',
        text: '6'
    },
    {
        class: 'light text-dark',
        text: '7'
    },
    {
        class: 'dark',
        text: '8'
    }
]

interface badgeIconDataType {
    class: string
    iconName: 'DollarSign' | 'Headphones' | 'Link2' | 'GitHub' | 'Award' | 'Activity' | 'Heart' | 'Mail' 
    color?:string
}
export const badgeIconData:badgeIconDataType[] = [
    {
        class: 'b-ln-height',
        iconName: 'Headphones',
        color:'secondary'
    },
    {
        class: 'b-ln-height',
        iconName: 'Link2',
        color:'success'
    },
    {
        class: 'b-ln-height',
        iconName: 'GitHub',
        color:'info'
    },
    {
        class: 'b-ln-height text-dark',
        iconName: 'Award',
        color:'warning'
    },
    {
        class: 'b-ln-height',
        iconName: 'Activity',
        color:'danger'
    },
    {
        class: 'b-ln-height text-dark',
        iconName: 'Heart',
        color:"light"
    },
    {
        class: 'badge-dark',
        iconName: 'Mail',
        color:"dark"
    }
]

export const roundedPillData:badgeIconDataType[] = [
    {
        class: 'secondary',
        iconName: 'Headphones'
    },
    {
        class: 'success',
        iconName: 'Link2'
    },
    {
        class: 'info',
        iconName: 'GitHub'
    },
    {
        class: 'warning text-dark',
        iconName: 'Award'
    },
    {
        class: 'danger',
        iconName: 'Activity'
    },
    {
        class: 'light text-dark',
        iconName: "Heart"
    },
    {
        class: 'dark text-light',
        iconName: "Mail"
    }
]

interface  badgeButtonDataType {
    class: string;
    text: string;
    iconName: 'Mail' | 'Bell' | 'Settings' | 'Music' | 'AlertTriangle';
}
export const badgeButtonData:badgeButtonDataType[] = [
    {
        class: 'secondary',
        text: 'notifications',
        iconName: 'Bell'
    },
    {
        class: 'success',
        text: 'Update available',
        iconName: 'Settings'
    },
    {
        class: 'info',
        text: 'Playing Now',
        iconName: 'Music'
    },
    {
        class: 'warning text-dark',
        text: '1.2 GB Used',
        iconName: 'AlertTriangle'
    }
]