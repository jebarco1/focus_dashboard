import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import CommonCardFooter from "../../../../../CommonElements/Footer/CommonCardFooter";
import { SolidBorderStyleHeading } from "../../../../../utils/Constant";
import SolidBorderStyleInlineForm from "./SolidBorderStyleInlineForm";

const SolidBorderStyle = () => {
  const subTitle = [
    {
      text: "Use the",
      code: ".border-style",
    },
    {
      text: "class to",
      code: ".mega-inline",
    },
    {
      text: "you can archive this style.",
    },
  ];
  return (
    <Col sm={12} xxl={6} className="box-col-6">
      <Card>
        <CommonHeader title={SolidBorderStyleHeading} subTitle={subTitle} headClass="pb-0"/>
        <CardBody className="megaoptions-border-space-sm">
          <SolidBorderStyleInlineForm />
        </CardBody>
        <CommonCardFooter />
      </Card>
    </Col>
  );
};

export default SolidBorderStyle;
