import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { BasicRadioAndCheckBox } from "../../../../../utils/Constant";
import SimpleCheckbox from "./SimpleCheckbox";
import SimpleRadios from "./SimpleRadios";

const BasicRadioAndCheckbox = () => {
  const subTitle = [
    {
      code: `.form-check-inline `,
      text: `Use the`,
    },
    {
      text: `through display inline.`,
    },
  ];
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonHeader title={BasicRadioAndCheckBox} subTitle={subTitle} headClass="pb-0"/>
        <CardBody>
          <Row className="g-3">
            <SimpleCheckbox />
            <SimpleRadios />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicRadioAndCheckbox;
