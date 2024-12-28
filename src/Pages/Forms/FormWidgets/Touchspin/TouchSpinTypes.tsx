export type TouchSpinPropsType = {
    touchSpinClassNames: string[];
    cardBodyClassName?: string;
    arrowIcon?:boolean
  };

  export interface TouchSpinsProp {
    item: string;
    arrowIcon?:boolean
  }

  export type CommonPrefixAndPostFixPropsType = {
    postIcon?:boolean
    preIcon?:boolean
    preButton?:boolean
    PostButton?:boolean
    differentColor?:boolean
   }