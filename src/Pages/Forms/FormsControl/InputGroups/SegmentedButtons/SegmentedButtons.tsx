import { Card, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { SegmentedButtonsHeading } from "../../../../../utils/Constant";
import SegmentedButtonsCardBody from "./SegmentedButtonsCardBody";

const SegmentedButtons = () => {
  const subTitle = [
    {
      text: "Multiple add-ons are supported and can be mixed with",
      code: "dropdowns",
    },
    {
      text: "versions.",
    },
  ];
  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonHeader
          title={SegmentedButtonsHeading}
          subTitle={subTitle}
          headClass="pb-0"
        />
        <SegmentedButtonsCardBody />
      </Card>
    </Col>
  );
};

export default SegmentedButtons;
