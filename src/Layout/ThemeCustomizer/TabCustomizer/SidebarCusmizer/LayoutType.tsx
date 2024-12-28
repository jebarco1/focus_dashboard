import { useState } from "react";
import { H6, UL } from "../../../../AbstractElements";
import { useAppDispatch } from "../../../../ReaduxToolkit/Hooks";
import { Layout_Type } from "../../../../utils/Constant";
import BoxLayout from "./BoxLayout";
import LTR from "./LTR";
import RTL from "./RTL";
import { setOpenCus } from "../../../../ReaduxToolkit/Reducer/ThemeCustomizerSlice";
import ConfigDB from "../../../../Config/ThemeConfig";

const LayoutType = () => {
  const dispatch = useAppDispatch();
  const localStorageLayout = ConfigDB.data.settings.layout_type;
  const [layout_type, setLayout_type] = useState(localStorageLayout);

  const handleLayout = (layout: string) => {
    setLayout_type(layout);
    dispatch(setOpenCus(false));
    if (layout === "rtl") {
      document.body.classList.add("rtl");
      document.body.classList.remove("ltr");
      document.body.classList.remove("box-layout");
      document.documentElement.dir = "rtl";
    } else if (layout === "ltr") {
      document.body.classList.add("ltr");
      document.body.classList.remove("rtl");
      document.body.classList.remove("box-layout");
      document.documentElement.dir = "ltr";
    } else if (layout === "box-layout") {
      document.body.classList.remove("ltr");
      document.body.classList.remove("rtl");
      document.body.classList.add("box-layout");
      document.body.classList.remove("offcanvas");
      document.documentElement.dir = "ltr";
    }
  };
  return (
    <div>
      <H6 className="mt-0 pt-0">{Layout_Type}</H6>
      <UL className="main-layout layout-grid flex-row simple-list">
        <LTR handleLayout={handleLayout} layout_type={layout_type}/>
        <RTL handleLayout={handleLayout} layout_type={layout_type}/>
        <BoxLayout handleLayout={handleLayout} layout_type={layout_type}/>
      </UL>
    </div>
  );
};

export default LayoutType;
