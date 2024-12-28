import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { DefaultCheckBoxHeading } from "../../../../../utils/Constant";
import DefaultChecks from "./DefaultChecks";
import DisabledChecks from "./DisabledChecks";
import RightCheck from "./RightCheck";
import Indeterminate from "./Indeterminate";

const DefaultCheckBox = () => {
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
      text: "for checkbox.",
    },
  ];
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={DefaultCheckBoxHeading} subTitle={subTitle} headClass="pb-0"/>
        <CardBody>
          <Row className="g-3">
            <DefaultChecks />
            <DisabledChecks />
            <RightCheck />
            <Indeterminate />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultCheckBox;
