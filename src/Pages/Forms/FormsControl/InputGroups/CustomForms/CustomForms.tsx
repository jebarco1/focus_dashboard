import { Card, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import CustomFormsCardBody from "./CustomFormsCardBody";
import { CustomFormsHeading } from "../../../../../utils/Constant";

const CustomForms = () => {
  const subTitle = [
    {
      text: "Input groups include support for",
      code: "custom selects and custom file inputs",
    },
    {
      text: ". Browser default versions of these are not supported.",
    },
  ];
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={CustomFormsHeading} subTitle={subTitle} headClass="pb-0" />
        <CustomFormsCardBody />
      </Card>
    </Col>
  );
};

export default CustomForms;
