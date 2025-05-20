import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { TopSellers } from "../../../../utils/Constant";
import TopSellerBody from "./TopSellerBody";
import { H3 } from "../../../../AbstractElements";

const TopSeller = () => {
  return (
    <Col xl="3" md="6" lg="6" className="box-col-3">
      <Row>
        <Col md="12" sm="12">
          <Card className="top-seller">
            <CardHeader className="card-no-border">
              <div className="header-top">
                <H3 className="m-0">{TopSellers}</H3>
              </div>
            </CardHeader>
            <CardBody className="pt-0">
     
            </CardBody>
          </Card>
        </Col>
  
      </Row>
    </Col>
  );
};

export default TopSeller;
