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
  // Coming Soon
  { path: `pages/comingsoon/comingsimple`, Component: ComingSoonSimple },
  { path: `pages/comingsoon/comingwithbgvideo`, Component: ComingWithBgVideo },
  { path: `pages/comingsoon/comingwithbgimage`, Component: ComingSoonWithBgImage },

  // Auth Pages
  { path: `authentication/loginsimple`, Component: LoginSimple },
  { path: `authentication/loginwithbgimage`, Component: LoginWithBackGroundImage },
  { path: `authentication/loginwithimagetwo`, Component: LoginWithImageTwo },
  { path: `authentication/loginwithvalidation`, Component: LoginWithValidation },
  { path: `authentication/loginwithtooltip`, Component: LoginWithTooltip },
  { path: `authentication/loginwithsweetalert`, Component: LoginWithSweetAlert },
  { path: `authentication/registersimple`, Component: RegisterSimple },
  { path: `authentication/registerwithbgimage`, Component: RegisterWithBgImage },
  { path: `authentication/registerwithimagetwo`, Component: RegisterWithImageTwo },
  { path: `authentication/registerwizard`, Component: RegisterWizard },
  { path: `authentication/unlockuser`, Component: UnlockUser },
  { path: `authentication/forgetpassword`, Component: ForgetPassword },
  { path: `authentication/resetpassword`, Component: ResetPassword },
  { path: `authentication/maintenance`, Component: Maintenance },
];