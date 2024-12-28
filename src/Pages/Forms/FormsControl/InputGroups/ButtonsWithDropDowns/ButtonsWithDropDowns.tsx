import { Card, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { ButtonsWithDropDownsHeading } from "../../../../../utils/Constant";
import ButtonsWithDropDownsCardBody from "./ButtonsWithDropDownsCardBody";

const ButtonsWithDropDowns = () => {
  const subTitle = [
    {
      text: "Use the",
      code: ".input-group ",
    },
    {
      text: "and",
      code: `[aria-label='']`,
    },
    {
      text: "through buttons with dropdowns.",
    },
  ];
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonHeader
          title={ButtonsWithDropDownsHeading}
          subTitle={subTitle}
          headClass="pb-0"
        />
        <ButtonsWithDropDownsCardBody />
      </Card>
    </Col>
  );
};

export default ButtonsWithDropDowns;
