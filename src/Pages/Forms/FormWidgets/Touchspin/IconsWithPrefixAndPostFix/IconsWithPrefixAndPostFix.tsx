import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { IconsWithPrefixAndPostFixHeading } from "../../../../../utils/Constant";
import CommonPrefixAndPostFix from "./CommonPrefixAndPostFix";

const IconsWithPrefixAndPostFix = () => {
  const subTitle = [
    {
      text: "Use the",
      code: ".decrement-touchspin ",
    },
    {
      text: "and",
      code: ".increment-touchspin ",
    },
    { text: "class." }
  ];
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader
          title={IconsWithPrefixAndPostFixHeading}
          subTitle={subTitle}
          headClass="pb-0"
        />
        <CardBody className="common-flex pre-post-touchspin">
          <CommonPrefixAndPostFix postIcon />
          <CommonPrefixAndPostFix preIcon />
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconsWithPrefixAndPostFix;
