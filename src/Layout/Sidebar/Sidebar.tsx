import { Link } from "react-router-dom";
import { Image } from "../../AbstractElements";
import { dynamicImage } from "../../Service";
import SidebarMain, { PropsTypes } from "./SidebarMain";
import { useAppSelector } from "../../ReaduxToolkit/Hooks";
const Sidebar = ({setOpen,open}:PropsTypes) => {
  const {toggleSidebar} = useAppSelector((state) => state.layout);
  return (
    <div className={`sidebar-wrapper ${open ? "sidebar-default" : ""} ${toggleSidebar ? "close_icon" : ""}`} >
        <div>
            <div className="logo-wrapper">
                <Link to={`${process.env.PUBLIC_URL}/dashboards/shoppingplace`}>
                    <Image className="img-fluid" src={dynamicImage("logo/mainlogo.png")} alt="" />
                </Link>
                <div className="back-btn">
                    <i className="fa fa-angle-left"></i>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Sidebar;
