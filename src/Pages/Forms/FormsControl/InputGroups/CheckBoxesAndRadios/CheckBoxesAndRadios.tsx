import { Card, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { CheckboxesAndRadiosHeading } from "../../../../../utils/Constant";
import CheckBoxesAndRadiosCardBody from "./CheckBoxesAndRadiosCardBody";

const CheckBoxesAndRadios = () => {
  const subTitle = [
    {
      text: "Input groups include support for custom selects and custom",
      code: "file uploads",
    },
    {
      text: ". Browser default versions of these are not supported.",
    },
  ];
  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonHeader
          title={CheckboxesAndRadiosHeading}
          subTitle={subTitle}
          headClass="pb-0"
        />
        <CheckBoxesAndRadiosCardBody />
      </Card>
    </Col>
  );
};

export default CheckBoxesAndRadios;
