import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { VariationRadioHeading } from "../../../../../utils/Constant";
import SelectPaymentMethod from "./SelectPaymentMethod";
import LearnAboutWebDesign from "./LearnAboutWebDesign";
import RadiosWithCreativeOptions from "./RadiosWithCreativeOptions";

const VariationRadio = () => {
  const subTitle = [
    {
      text: "Use the",
      code: "radio",
    },
    { text: "attribute through create variation of radio designs." },
  ];
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={VariationRadioHeading} subTitle={subTitle} headClass="pb-0"/>
        <CardBody>
          <Row className="g-3">
            <SelectPaymentMethod />
            <LearnAboutWebDesign />
            <RadiosWithCreativeOptions />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VariationRadio;
