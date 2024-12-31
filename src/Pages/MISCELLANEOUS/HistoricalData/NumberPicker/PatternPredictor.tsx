import { Card, CardBody } from "reactstrap";
import PowerballPatternPredictor from "./PowerballPatternPredictor";


interface PatternPredictorProps {}

const PatternPredictor: React.FC<PatternPredictorProps> = () => {

  return (
    <Card>
      <CardBody>
        <div className="collection-filter-block">
         <PowerballPatternPredictor />
        </div>
      </CardBody>
    </Card>
  );
};

export default PatternPredictor ;
