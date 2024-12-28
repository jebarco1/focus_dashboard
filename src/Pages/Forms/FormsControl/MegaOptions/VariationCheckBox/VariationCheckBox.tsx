import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { VariationCheckBoxHeading } from "../../../../../utils/Constant";
import EnjoyActivities from "./EnjoyActivities";
import SelectRequirements from "./SelectRequirements";

const VariationCheckBox = () => {
  const subTitle = [
    {
      text: "We can create any creative design by using",
      code: "(type='checkbox')",
    },
    { text: "attribute." },
  ];
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={VariationCheckBoxHeading} subTitle={subTitle} headClass="pb-0" />
        <CardBody>
          <Row className="g-3">
            <EnjoyActivities />
            <SelectRequirements />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VariationCheckBox;
