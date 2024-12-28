import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import CommonCardFooter from "../../../../../CommonElements/Footer/CommonCardFooter";
import { VerticalStyleHeading } from "../../../../../utils/Constant";
import VerticalStyleForm from "./VerticalStyleForm";

const VerticalStyle = () => {
  const subTitle = [
    {
      text: "vertical style in mega-options. Use the",
      code: ".mega-vertical ",
    },
    {
      text: "class through created vertical alignments.",
    },
  ];
  return (
    <Col sm={12} xxl={6} className="box-col-12">
      <Card className=" height-equal">
        <CommonHeader title={VerticalStyleHeading} subTitle={subTitle} headClass="pb-0"/>
        <CardBody>
          <VerticalStyleForm />
        </CardBody>
        <CommonCardFooter />
      </Card>
    </Col>
  );
};

export default VerticalStyle;
