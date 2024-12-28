import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { AnimatedButtonsHeading } from "../../../../../utils/Constant";
import PaymentMethod from "./PaymentMethod";
import FavoriteSocialMedia from "./FavoriteSocialMedia";

const AnimatedButtons = () => {
  const subTitle = [
    {
      code: `.radio_animated `,
      text: `Use the`,
    },
    {
      text: `through animated checkbox and radios.`,
    },
  ];
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonHeader title={AnimatedButtonsHeading} subTitle={subTitle} headClass="pb-0"/>
        <CardBody>
          <Row className="g-3">
            <PaymentMethod />
            <FavoriteSocialMedia />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimatedButtons;
