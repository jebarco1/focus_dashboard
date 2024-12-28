import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { DefaultRadioHeading } from "../../../../../utils/Constant";
import CustomRadios from "./CustomRadios";
import DisabledRadios from "./DisabledRadios";
import RightRadios from "./RightRadios";

const DefaultRadio = () => {
  const subTitle = [
    {
      code: `.form-check-input  `,
      text: `Use the`,
    },
    {
      text: `and`,
      code: `.form-check-label `,
    },
    {
      text: "for radios.",
    },
  ];
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={DefaultRadioHeading} subTitle={subTitle} headClass="pb-0"/>
        <CardBody>
          <Row className="g-3">
            <CustomRadios />
            <DisabledRadios />
            <RightRadios />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultRadio;
