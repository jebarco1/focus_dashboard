import { Link } from "react-router-dom";
import { dynamicImage } from "../../../Service";
import { Image } from "../../../AbstractElements";
import SVG from "../../../utils/CommonSvgIcon/SVG";
import { useAppDispatch, useAppSelector } from "../../../ReaduxToolkit/Hooks";
import { setToggleSidebar } from "../../../ReaduxToolkit/Reducer/LayoutSlice";

const HeaderLogo = () => {
  const dispatch = useAppDispatch()
  const {toggleSidebar }= useAppSelector((state)=> state.layout)
  return (
    <>
      <div className="logo-wrapper">
        <Link to={`${process.env.PUBLIC_URL}/dashboards/shoppingplace`}>
          <Image
            className="img-fluid"
            src={dynamicImage("logo/logo.png")}
            alt=""
          />
        </Link>
      </div>
      <SVG iconId={'Grid'} className={'stroke-icon toggle-sidebar'} onClick={()=>{dispatch(setToggleSidebar(!toggleSidebar))}}/>
    </>
  )
}

export default HeaderLogo;
