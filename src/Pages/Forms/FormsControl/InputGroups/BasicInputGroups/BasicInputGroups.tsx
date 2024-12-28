import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { BasicInputGroupsHeading } from "../../../../../utils/Constant";
import CommonCardFooter from "../../../../../CommonElements/Footer/CommonCardFooter";
import Basic from "./Basic";
import Wrapping from "./Wrapping";

const BasicInputGroups = () => {
  const subTitle = [
    {
      text: "Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place",
      code: `<label>`,
    },
    {
      text: "s outside the input group.",
    },
  ];
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader
          title={BasicInputGroupsHeading}
          subTitle={subTitle}
          headClass="pb-0"
        />
        <CardBody>
          <Row className="g-3">
            <Basic />
            <Wrapping />
          </Row>
        </CardBody>
        <CommonCardFooter />
      </Card>
    </Col>
  );
};

export default BasicInputGroups;
