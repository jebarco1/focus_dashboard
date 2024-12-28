import { ReactNode } from "react";

interface propsTypes {
    children?: ReactNode;
    className?: string;
  
}

const H4 = (props:propsTypes) => {
  const { children = "" } = props;
  return <h4 {...props}>{children}</h4>;
};

export default H4;
