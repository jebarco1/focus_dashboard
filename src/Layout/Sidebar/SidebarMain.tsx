import { LI, UL } from "../../AbstractElements";
import { Href } from "../../utils/Constant";
import SimpleBar from "simplebar-react";
import SidebarBack from "./SidebarBack";
import MenuList from "./MenuList";
import { Link } from "react-router-dom";
import SVG from "../../utils/CommonSvgIcon/SVG";
import { SidebarMenu } from "../../Data/Layout/Sidebar/Menu";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SidebarMenuTypes } from "../../Data/Layout/Sidebar/SidebarTypes";
import { useAppSelector } from "../../ReaduxToolkit/Hooks";
export interface PropsTypes {
  setOpen: (item:boolean) => void
  open ?: boolean
}
const SidebarMain = ({setOpen,open}:PropsTypes) => {
  const { sidebarIconType } = useAppSelector((state) => state.themeCustomizer);
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<string[]>([]);
  const [sideMenu,setSideMenu] = useState("")
  const { layout } = useAppSelector((state) => state.themeCustomizer);
  const handleClick= (item:SidebarMenuTypes) => {
    if(layout === "material-icon"){
      let menu:string =sideMenu
      menu = sideMenu !== item.title ? item.title : ""  
      setSideMenu(menu);
      setOpen(menu !== "" ? true : false)
    }
  }
  return (
    <nav className="sidebar-main">
      <div id="sidebar-menu">
        <UL className="sidebar-links simple-list" id="simple-bar"> 
          <SimpleBar className="w-100 simplebar-scrollable-y h-100">
          <SidebarBack />
          {SidebarMenu.map((data,index) => (
            <LI className={`sidebar-list`} key={index} >
              <Link className={`sidebar-link sidebar-title ${sideMenu === data.title ? "active" : "" }`} to={Href} onClick={()=>handleClick(data)}>
                <SVG className={`${sidebarIconType}-icon`} iconId={`${sidebarIconType === "fill" ? "fill-" : ""}${data.svgIcon}`} />
                <span>{(data.title)}</span>
              </Link>
              <UL className= "sidebar-submenu custom-scrollbar simple-list"
                style={{display : `${layout === "material-icon" ? data.title === sideMenu  ? "block" : "none" : ""}`}}>
                {data.title1 && <LI className="sidebar-head">{(data.title1)}</LI>}
                <MenuList subMenuData={data} isOpen={isOpen} setIsOpen={setIsOpen} level={0} />
              </UL>
            </LI>
          ))}
          </SimpleBar>
        </UL>
      </div>
    </nav>
  );
};

export default SidebarMain;
