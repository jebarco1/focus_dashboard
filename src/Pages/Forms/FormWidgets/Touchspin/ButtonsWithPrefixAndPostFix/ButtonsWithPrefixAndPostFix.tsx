import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { ButtonsWithPrefixAndPostFixHeading } from "../../../../../utils/Constant";
import CommonPrefixAndPostFix from "../IconsWithPrefixAndPostFix/CommonPrefixAndPostFix";

const ButtonsWithPrefixAndPostFix = () => {
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
          title={ButtonsWithPrefixAndPostFixHeading}
          subTitle={subTitle}
          headClass="pb-0"
        />
        <CardBody className="common-flex pre-post-touchspin">
          <CommonPrefixAndPostFix preButton differentColor />
          <CommonPrefixAndPostFix PostButton differentColor />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ButtonsWithPrefixAndPostFix;
