import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../ReaduxToolkit/Hooks";
import Footer from "./Footer/Footer";
import Header from "./Header";
import TapTop from "./TapTop/TapTop";
import Loader from "./Loader/Loader";
import Sidebar from "./Sidebar/Sidebar";

import { setToggleSidebar } from "../ReaduxToolkit/Reducer/LayoutSlice";
import { addSidebarLayouts } from "../ReaduxToolkit/Reducer/ThemeCustomizerSlice";
import SubscriptionPage from "../components/SubscriptionPage"; // ✅ import your SubscriptionPage
import { setSubscription } from "../ReaduxToolkit/Reducer/subscriptionSlice";

const Layout = () => {
  const [open, setOpen] = useState<boolean>(false);
  
  const { toggleSidebar, scroll } = useAppSelector((state) => state.layout);
  const { layout } = useAppSelector((state) => state.themeCustomizer);
  const dispatch = useAppDispatch();

  const isSubscribed = useAppSelector((state) => state.subscription.active);

  const storedUser = localStorage.getItem('user');

  if(storedUser)
  {
    const parsedUser = JSON.parse(storedUser);
    if(parsedUser.user_active ==1)
    {
      dispatch(setSubscription(true)); 
    }

  }


  console.log(useAppSelector((state) => state.subscription.active));

  const compactSidebar = () => {
    const windowWidth = window.innerWidth;
    if (layout === "material-icon") {
      if (windowWidth < 1200) {
        dispatch(setToggleSidebar(true));
      } else {
        dispatch(setToggleSidebar(false));
      }
    } else if (layout === "horizontal-wrapper") {
      if (windowWidth < 992) {
        dispatch(setToggleSidebar(true));
        dispatch(addSidebarLayouts("material-icon"));
      } else {
        dispatch(setToggleSidebar(false));
        dispatch(addSidebarLayouts("horizontal-wrapper"));
      }
    }
  };

  useEffect(() => {
    compactSidebar();
    window.addEventListener("resize", compactSidebar);
    return () => {
      window.removeEventListener("resize", compactSidebar);
    };
  }, [layout]);

  return (
    <>
      <Loader />
      <TapTop />
      <div
        className={`page-wrapper ${layout} ${
          layout === "material-icon" ? `compact-sidebar compact-small` : ""
        } `}
      >
        <div
          className={`page-header ${open ? "sidebar-default" : ""} ${
            toggleSidebar ? "close_icon" : ""
          }  ${scroll ? "d-none" : "d-block"}`}
        >
          <Header />
        </div>
        <div className="page-body-wrapper">
          <Sidebar setOpen={setOpen} open={open} />
          <div className="page-body">
         {isSubscribed ? (
            <Outlet />
          ) : (
            <SubscriptionPage />
          )}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
