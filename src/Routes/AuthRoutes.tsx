import ForgetPassword from "../Pages/Others/Authentication/ForgetPassword/ForgetPassword";
import LoginSimple from "../Pages/Others/Authentication/LoginSimple/LoginSimple";
import LoginWithBackGroundImage from "../Pages/Others/Authentication/LoginWithBackGroundImage/LoginWithBackGroundImage";
import LoginWithImageTwo from "../Pages/Others/Authentication/LoginWithImageTwo/LoginWithImageTwo";
import LoginWithSweetAlert from "../Pages/Others/Authentication/LoginWithSweetAlert/LoginWithSweetAlert";
import LoginWithTooltip from "../Pages/Others/Authentication/LoginWithTooltip/LoginWithTooltip";
import LoginWithValidation from "../Pages/Others/Authentication/LoginWithValidation/LoginWithValidation";
import Maintenance from "../Pages/Others/Authentication/Maintenance/Maintenance";
import RegisterSimple from "../Pages/Others/Authentication/RegisterSimple/RegisterSimple";
import RegisterWithBgImage from "../Pages/Others/Authentication/RegisterWithBgImage/RegisterWithBgImage";
import RegisterWithImageTwo from "../Pages/Others/Authentication/RegisterWithImageTwo/RegisterWithImageTwo";
import RegisterWizard from "../Pages/Others/Authentication/RegisterWizard/RegisterWizard";
import ResetPassword from "../Pages/Others/Authentication/ResetPassword/ResetPassword";
import UnlockUser from "../Pages/Others/Authentication/UnlockUser/UnlockUser";
import ComingSoonSimple from "../Pages/Others/ComingSoon/ComingSoonSimple/ComingSoonSimple";
import ComingSoonWithBgImage from "../Pages/Others/ComingSoon/ComingSoonWithBgImage/ComingSoonWithBgImage";
import ComingWithBgVideo from "../Pages/Others/ComingSoon/ComingWithBgVideo/ComingWithBgVideo";


export const authRoutes = [


//  ComingSoon
 { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingsimple`, Component: <ComingSoonSimple/> },
 { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingwithbgvideo`, Component: <ComingWithBgVideo/> },
 { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingwithbgimage`, Component: <ComingSoonWithBgImage/> },
 

//  // Auth Pages
 { path: `${process.env.PUBLIC_URL}/pages/authentication/loginsimple`, Component: <LoginSimple /> },
 { path: `${process.env.PUBLIC_URL}/pages/authentication/loginwithbgimage`, Component: <LoginWithBackGroundImage /> },
 { path: `${process.env.PUBLIC_URL}/pages/authentication/loginwithimagetwo`, Component: <LoginWithImageTwo /> },
 { path: `${process.env.PUBLIC_URL}/pages/authentication/loginwithvalidation`, Component: <LoginWithValidation /> },
 { path: `${process.env.PUBLIC_URL}/pages/authentication/loginwithtooltip`, Component: <LoginWithTooltip /> },
 { path: `${process.env.PUBLIC_URL}/pages/authentication/loginwithsweetalert`, Component: <LoginWithSweetAlert /> },
 { path: `${process.env.PUBLIC_URL}/pages/authentication/registersimple`, Component: <RegisterSimple /> },
 { path: `${process.env.PUBLIC_URL}/pages/authentication/registerwithbgimage`, Component: <RegisterWithBgImage /> },
 { path: `${process.env.PUBLIC_URL}/pages/authentication/registerwithimagetwo`, Component: <RegisterWithImageTwo /> },
 { path: `${process.env.PUBLIC_URL}/pages/authentication/registerwizard`, Component: <RegisterWizard /> },
 { path: `${process.env.PUBLIC_URL}/pages/authentication/unlockuser`, Component:<UnlockUser />},
 { path: `${process.env.PUBLIC_URL}/pages/authentication/forgetpassword`, Component:<ForgetPassword />},
 { path: `${process.env.PUBLIC_URL}/pages/authentication/resetpassword`, Component: <ResetPassword />},
 { path: `${process.env.PUBLIC_URL}/pages/authentication/maintenance`, Component: <Maintenance />}
];