

import Knowledgebase from "../Pages/MISCELLANEOUS/Knowledgebase/Knowledgebase";
import FooterDark from "../Pages/PageLayout/FooterDark/FooterDark";
import FooterFixed from "../Pages/PageLayout/FooterFixed/FooterFixed";
import HideNavScrollContainer from "../Pages/PageLayout/HideNavScrollContainer/HideNavScrollContainer";
import HistoricalData from "../Pages/MISCELLANEOUS/HistoricalData/HistoricalData";
import HistoricalDataByNumber from "../Pages/MISCELLANEOUS/HistoricalData/HistoricalDataByNumber";
import NumberPicker from "../Pages/MISCELLANEOUS/HistoricalData/NumberPicker";
import Patterns from "../Pages/MISCELLANEOUS/HistoricalData/Patterns";

const routes = [
  
  
  { path: `${process.env.PUBLIC_URL}/pagelayout/hidenavscroll`, Component: <HideNavScrollContainer />},
  { path: `${process.env.PUBLIC_URL}/pagelayout/footerdark`, Component: <FooterDark />},
  { path: `${process.env.PUBLIC_URL}/pagelayout/footerfixed`, Component: <FooterFixed />},
  

     // HistoricalData
     { path: `${process.env.PUBLIC_URL}/pages/HistoricalData`, Component:<HistoricalData />},
     { path: `${process.env.PUBLIC_URL}/pages/HistoricalDataByNumber`, Component:<HistoricalDataByNumber />},
     { path: `${process.env.PUBLIC_URL}/pages/NumberPicker`, Component:<NumberPicker />},
     { path: `${process.env.PUBLIC_URL}/pages/Patterns`, Component:<NumberPicker />},
    

    // Knowledgeable
    { path: `${process.env.PUBLIC_URL}/pages/knowledgebase`, Component:<Knowledgebase />},
     
    

];
export default routes;