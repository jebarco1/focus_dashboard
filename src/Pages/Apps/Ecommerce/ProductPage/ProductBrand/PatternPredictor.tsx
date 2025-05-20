import { Card, CardBody } from "reactstrap";
import { H5, LI, P, UL } from "../../../../../AbstractElements";
import FeatherIcons from "../../../../../utils/CommonSvgIcon/FeatherIcons";
import { servicesData } from "../../../../../Data/Apps/Ecommerce/ProductPageData";
import PowerballPatternPredictor from "../ProductDetails/PowerballPatternPredictor";


interface PatternPredictorProps {
  selectedRegularNumbers: number[]; // Array of selected numbers
  setNumberPicks: React.Dispatch<React.SetStateAction<{ rnumber: string; pnumber: number }[]>>;
}

const PatternPredictor: React.FC<PatternPredictorProps> = ({ selectedRegularNumbers, setNumberPicks }) => {

  return (
    <Card>
      <CardBody>
        <div className="collection-filter-block">
         <PowerballPatternPredictor setNumberPicks={setNumberPicks} selectedRegularNumbers={selectedRegularNumbers}/>
        </div>
      </CardBody>
    </Card>
  );
};

export default PatternPredictor ;
