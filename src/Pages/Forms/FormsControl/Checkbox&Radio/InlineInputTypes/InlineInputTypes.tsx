import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { InlineInputTypesHeading } from "../../../../../utils/Constant";
import InlineCheckbox from "./InlineCheckbox";
import InlineRadios from "./InlineRadios";
import InlineSwitches from "./InlineSwitches";

const InlineInputTypes = () => {
  const subTitle = [
    {
      code: `.form-check-inline `,
      text: `Group checkboxes or radios on the same horizontal row by adding`,
    },
    {
      text: `to any`,
      code: `.form-check `,
    },
  ];
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={InlineInputTypesHeading} subTitle={subTitle} headClass="pb-0"/>
        <CardBody>
          <Row className="g-3">
            <InlineCheckbox />
            <InlineRadios />
            <InlineSwitches />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InlineInputTypes;
