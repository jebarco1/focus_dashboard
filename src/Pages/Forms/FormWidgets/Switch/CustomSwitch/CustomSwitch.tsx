import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { CustomSwitchHeading } from "../../../../../utils/Constant";
import CommonCustomSwitch from "./CommonCustomSwitch";

const CustomSwitch = () => {
  const subTitle = [
    {
      text: "A switch has the markup of a custom checkbox but uses the .form-switch class to render a ",
      code: "toggle switch",
    },
    {
      text: ".",
    }
  ];
  return (
    <Col md={12}>
      <Card>
        <CommonHeader title={CustomSwitchHeading} subTitle={subTitle} headClass="pb-0" />
        <CardBody>
          <Row className="g-3">
            <CommonCustomSwitch />
            <CommonCustomSwitch cardWrapperClassName="radius-none" formCheckSizeClassName="default-square" />
            <CommonCustomSwitch cardWrapperClassName="common-flex" disabled />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomSwitch;
