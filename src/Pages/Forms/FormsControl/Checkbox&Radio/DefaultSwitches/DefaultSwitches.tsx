import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { DefaultSwitchesBoxHeading } from "../../../../../utils/Constant";
import CustomSwitch from "./CustomSwitch";
import DisabledSwitch from "./DisabledSwitch";
import RightSwitches from "./RightSwitches";

const DefaultSwitches = () => {
  const subTitle = [
    {
      code: `.form-switch`,
      text: `Use the`,
    },
    {
      text: `and`,
      code: `.form-check-label `,
    },
    {
      text: "for switches.",
    }
  ];
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={DefaultSwitchesBoxHeading} subTitle={subTitle}  headClass="pb-0" />
        <CardBody>
          <Row className="g-3">
            <CustomSwitch />
            <DisabledSwitch />
            <RightSwitches />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultSwitches;
