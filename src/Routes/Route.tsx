

import Knowledgebase from "../Pages/MISCELLANEOUS/Knowledgebase/Knowledgebase";
import FooterDark from "../Pages/PageLayout/FooterDark/FooterDark";
import FooterFixed from "../Pages/PageLayout/FooterFixed/FooterFixed";
import HideNavScrollContainer from "../Pages/PageLayout/HideNavScrollContainer/HideNavScrollContainer";
import HistoricalData from "../Pages/MISCELLANEOUS/HistoricalData/HistoricalData";
import HistoricalDataByNumber from "../Pages/MISCELLANEOUS/HistoricalData/HistoricalDataByNumber";
import NumberPicker from "../Pages/MISCELLANEOUS/HistoricalData/NumberPicker";
import LotteryPatternsPage from "../Pages/MISCELLANEOUS/HistoricalData/Patterns";
import LotteryMyPickPage from "../Pages/MISCELLANEOUS/HistoricalData/MyPick";

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

  // Knowledgebase
  { path: "pages/knowledgebase", Component: Knowledgebase }
];


export default routes;