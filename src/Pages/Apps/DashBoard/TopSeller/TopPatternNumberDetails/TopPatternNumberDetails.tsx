import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { TopSellingProducts } from "../../../../../utils/Constant";
import TopPatternNumberDetailsBody from "./TopPatternNumberDetailsBody";
import { H3 } from "../../../../../AbstractElements";

const TopSellingProduct = () => {
  return (
    <Col md="12" sm="12">
      <Card className="selling-product">
        <CardHeader className="card-no-border">
          <div className="header-top">
            <H3 className="m-0">{TopSellingProducts}</H3>
          </div>
        </CardHeader>
        <CardBody className="pt-0">
          <TopPatternNumberDetailsBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default TopSellingProduct;
