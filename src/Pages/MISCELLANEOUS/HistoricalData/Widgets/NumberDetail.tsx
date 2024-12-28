import { Card, CardBody, Col } from "reactstrap";
import { H5, Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Link } from "react-router-dom";
import { Href, YourBalances } from "../../../../utils/Constant";
import SVG from "../../../../utils/CommonSvgIcon/SVG";
import Investment from "./numberDetailsDetail";

const YourBalance = () => {
  return (
    <Col sm="6" className="numberDetailsCol">
      <Card className="balance-box height-equal-2">
      <div className="pb-0 card-header"><h3 className="mb-0">Number Details</h3></div>
        <CardBody className="d-flex align-items-center justify-content-center">
          <div className="balance-profile">
            <div className="NumberBall">
               <p>14</p>
            </div>
            <span className="f-light d-block">Temperature</span>
            <H5 className="mt-1">COLD</H5>
            <Investment />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default YourBalance;
