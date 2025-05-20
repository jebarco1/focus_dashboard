

import Knowledgebase from "../Pages/MISCELLANEOUS/Knowledgebase/Knowledgebase";
import FooterDark from "../Pages/PageLayout/FooterDark/FooterDark";
import FooterFixed from "../Pages/PageLayout/FooterFixed/FooterFixed";
import HideNavScrollContainer from "../Pages/PageLayout/HideNavScrollContainer/HideNavScrollContainer";
import HistoricalData from "../Pages/MISCELLANEOUS/HistoricalData/HistoricalData";
import HistoricalDataByNumber from "../Pages/MISCELLANEOUS/HistoricalData/HistoricalDataByNumber";
import NumberPicker from "../Pages/MISCELLANEOUS/HistoricalData/NumberPicker";
import LotteryPatternsPage from "../Pages/MISCELLANEOUS/HistoricalData/Patterns";
import LotteryMyPickPage from "../Pages/MISCELLANEOUS/HistoricalData/MyPick";
import ProductPricing from "../Pages/Apps/Ecommerce/Pricing/ProductPricing";
import Checkout from "../Pages/Apps/Ecommerce/Checkout/Checkout";
import Invoice from "../Pages/Apps/Ecommerce/Invoice/Invoice";
import PaymentDetails from "../Pages/Apps/Ecommerce/PaymentDetails/PaymentDetails";
import UserEdit from "../Pages/Apps/User/UserEdit/UserEdit";
import Dashboard from "../Pages/MISCELLANEOUS/Dashboard/Dashboard";

const routes =[
  { path: "pagelayout/hidenavscroll", Component: HideNavScrollContainer },
  { path: "pagelayout/footerdark", Component: FooterDark },
  { path: "pagelayout/footerfixed", Component: FooterFixed },

  // Historical Data
  { path: "pages/historicaldata", Component: HistoricalData },
  { path: "pages/historicaldatabynumber", Component: HistoricalDataByNumber },
  { path: "pages/numberpicker", Component: NumberPicker },
  { path: "pages/patterns", Component: LotteryPatternsPage },
  { path: "pages/mypicks", Component: LotteryMyPickPage },

  { path: "pages/Dashboard", Component: Dashboard },

  // Knowledgebase
  { path: "pages/knowledgebase", Component: Knowledgebase },

  { path: "pages/ecommerce/pricing", Component: ProductPricing },
  { path: "pages/ecommerce/checkout", Component: Checkout },
  { path: "pages/ecommerce/paymentdetails", Component: PaymentDetails },

    //  User
    { path: "/users/usersprofile", Component: Invoice },
     { path: "/users/usersedit", Component: UserEdit },

];


export default routes;