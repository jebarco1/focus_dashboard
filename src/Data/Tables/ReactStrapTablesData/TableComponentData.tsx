import { AlertswithLinks, Alertswithicons, BasicAlert, BasicSkinCheck, ButtonswithIcon, CheckedRadio, DefaultCheckboxSquar, DefaultInputtext, DefaultProgress, DefaultRadio, DefaultSwitch, DisableCheck, DisableSwitch, DisabledSelectMode, DismissibleAlerts, FlatSkinCheck, HoverText, IconButton, LoadingButtons, Outlinebutton, ProgressSizes, SingleSelect, StripedProgress, SwitchColor, SwitchOutline } from "../../../utils/Constant"

export const roundButtonsData = [
    {
      title:"Button",
      details:`Bootstrap includes six predefined button styles, each serving its own semantic purpose.`,
    },
    {
      title:"Round Button",
      details :"Use .btn-pill class to button for Round Buttons.",
      class:"btn-pill"
    }
  ]

  export const buttonsWithIconData=[
    {
      title:ButtonswithIcon,
      icon:"info-circle",
      header:"Primary",
      details:"Bootstrap includes six predefined button styles, each serving its own semantic purpose."
    },
    {
      title:IconButton,
      icon:"camera",
      details:"Simple Icon Button"
    },
    {
      title:LoadingButtons,
      icon:"spin fa-spinner",
      header:"Expand UP",
      details:"Expand Animation Buttons"
    }
  ]

  export const alertTableData = [
    {
      title: BasicAlert,
      color:"primary",
      tableColData: `<strong>Success!</strong> Indicates a successful or positive action.`,
      details: `<span>Alerts are available for any length of text, as well as an optional dismiss button. Add <code> alert alert-primary</code>,<code> alert alert-secondary</code>,<code> alert alert-success</code>,<code> alert alert-info</code> classes for alert with all theme colors.</span>`
    },
    {
      title: AlertswithLinks,
      color:"primary",
      tableColData: `<strong>Success!</strong> You should <a className="alert-link" href="#">read this message</a>.`,
      details: `<span>Alerts are available for any length of text, as well as an optional dismiss button. Add <code> alert alert-primary</code>,<code> alert alert-secondary</code>,<code> alert alert-success</code>,<code> alert alert-info</code> classes for alert with all theme colors.</span>`
    }
  ]
  export const alertDismissibleData =[
    {
      title: DismissibleAlerts,
      color:"secondary",
      tableColData: `<strong>Holy !</strong> You can check in on some of those fields below.`,
      details: `<span>Add a dismiss button and the<code> alert alert-dismissable</code>class, which adds extra padding to the right of the alert and positions the<code>close</code>a link On the dismiss button, add the data-bs-dismiss="alert" attribute, which triggers the JavaScript functionality. Be sure to use the<code>a</code>element with it for proper behavior across all devices. To animate alerts when dismissing them, be sure to add the .fade and .in classes.</span>`
    },
    {
      title: Alertswithicons,
      color:"primary",
      icon:true,
      tableColData: `Good Morning! Start your day with some alerts.`,
      details: `<span>Add a dismiss button and the<code> alert alert-dismissable</code>class, which adds extra padding to the right of the alert and positions the<code>close</code>a link On the dismiss button, add the data-bs-dismiss="alert" attribute, which triggers the JavaScript functionality. Be sure to use the<code>a</code>element with it for proper behavior across all devices. To animate alerts when dismissing them, be sure to add the .fade and .in classes.</span>`
    }
  ];

  export const progressTableData = [
    {
      title: DefaultProgress,
      details: `Uses a progress bar with class <code>progress-bar </code> and background color <code>bg-primary, bg-secondary</code> also change`,
    },
    {
      title: StripedProgress,
      striped:true,
      details:`Uses a gradient to create a striped effect class. <code>progress-bar-striped</code>`,
    },
    {
      title: ProgressSizes,
      size:"lg",
      details: `Different sized progress. For Default progress, class need <code>lg-progress-bar </code>on div.`
    },
  ];
  
  export const checkboxTableData = [
    {
      title: DefaultCheckboxSquar,
      tableColData: "Default",
      details: `Wrap with use <code>.m-squar</code> checkbox.`,
      class:'m-squar'
    },
    {
      title: BasicSkinCheck,
      tableColData: "Brand state",
      details: `Wrap with use <code>checkbox-dark </code>for this style of checkbox.`,
      class:'checkbox-dark'
    },
    {
      title: FlatSkinCheck,
      tableColData: "checked",
      check:true,
      details: `Wrap with use <code>checkbox-solid-* </code>,<code> primary, secondary, success, info, warning, danger </code> for this style of checkbox.`,
      class:'checkbox-solid-primary'
    },
    {
      title: DisableCheck,
      tableColData: "Disabled",
      disabled:true,
      details: `Wrap with use <code>disabled </code>,<code> primary, secondary, success, info, warning, danger </code> for this style of checkbox disable.`,
      class:'checkbox-solid-primary'
    },
  ];

  export const radioBoxTableData = [
    {
      title: DefaultRadio,
      tableColData: "Option 1",
      details: `Wrap with use <code>.radio-*</code> and color <code>.radio-*</code><code>primary , secondary , success , info</code> on Radio.`,
      color:"primary"
    },
    {
      title: CheckedRadio,
      tableColData: "Checked",
      check:true,
      details: `Wrap with use<code>checkbox-dark</code>for this style of checkbox.`,
      color:"primary"
    },
    {
      title: FlatSkinCheck,
      tableColData: "Disabled",
      disabled:true,
      details: `Wrap with use<code>checkbox-solid-*</code>,<code>primary, secondary, success, info, warning, danger</code>for this style of checkbox.`,
      color:"primary"
    }
  ];

  export const selectBoxTableData = [
    {
      title: SingleSelect,
      details: `Use for basic select control.`
    },
    {
      title: DisabledSelectMode,
      disabled:true,
      details:  `Use for disabled select control add <code>disabled</code>.`,
    },
  ];

  export const largeSelectModeData = [
    {
      size:"lg",
      id:"exampleForm1"
    },
    {
      size:"sm",
      id:"exampleForm3",
      class:"mt-5"
    },
  ]

  export const inputTableData = [
    {
      title: DefaultInputtext,
      class: "input-primary",
      details:  "Use for basic select control."
    },
    {
      title: "Input Hover Color ",
      details: `Use for basic input color add class<code>input-air-*</code><code>primary, secondary, success, info</code>.on input`,
    },
  ];

  export const badgesTableData = [
    {
      title: "Basic Pills",
      tdClassName:"pills-component",
      tableColData:"Primary",
      details:`Use the <code>.badge</code> class, followed by. with badge color use class <code>.badge-*</code><code>primary , secondary , success , info, warning, danger, light</code>  class within element to create default pill.`
    },
    {
      title: "Label With Icon",
      class:"m-5",
      badgeClass:"label-square",
      tableColData:"Primary Label",
      details:`Use the <code>label-square</code> class with <code>div</code>`
    },
  ];

  export const toolTipTriggersData = [
    {
      title: HoverText,
      color: "primary",
      name:"Primary",
      tooltip:"Hover",
      details:  `Use data-bs-toggle="tooltip" for hover trigger. This is a default trigger`
    },
    {
      title: "Link",
      color: "primary",
      name:"Link",
      tooltip:"Hooray!",
      details:  `Use  <code>a href="#"</code> for link trigger. This is a link trigger`
    },
    {
      title: Outlinebutton,
      outline:true,
      color: "primary",
      name:"Primary",
      tooltip:"Hover",
      details:  `Use  <code>btn btn-outline-info</code> for outline trigger. and button bold Border use class<code>btn btn-outline-dark-2x</code>`
    }
  ];

  export const switchTableData = [
    {
        title: DefaultSwitch,
        check: true,
      details: `Use class <code>switch</code> for label.`
    },
    {
      title: DisableSwitch,
      disabled: true,
      details: `this Disable Switch <code>disabled</code>`
    }
  ]

  export const switchColorData = [
    {
      title: SwitchColor,
      details: `Use  class <code>bg-*</code><code>Primary , Secondary , Success , Info , Warning , Danger</code>in span with icon show switch <code>icon-state</code>on div.`
    },
    {
      title: SwitchOutline,
      mediaClass:"switch-outline",
      details: `Use  class <code>switch-outline</code>on div.`
    }
  ];