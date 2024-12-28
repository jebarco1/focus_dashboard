import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import CommonCardFooter from "../../../../../CommonElements/Footer/CommonCardFooter";
import { offerStyleBorderHeading } from "../../../../../utils/Constant";
import OfferStyleBorderForm from "./OfferStyleBorderForm";

const OfferStyleBorder = () => {
  const subTitle = [
    { text: "Use the", code: ".offer-style " },
    { text: "class to", code: " .mega-inline" },
    { text: "you can archive this style." },
  ];
  return (
    <Col sm={12} xxl={6} className="box-col-6">
      <Card>
        <CommonHeader title={offerStyleBorderHeading} subTitle={subTitle} headClass="pb-0" />
        <CardBody className="megaoptions-border-space-sm">
          <OfferStyleBorderForm />
        </CardBody>
        <CommonCardFooter />
      </Card>
    </Col>
  );
};

export default OfferStyleBorder;
