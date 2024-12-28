import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import CommonCardFooter from "../../../../../CommonElements/Footer/CommonCardFooter";
import { HorizontalStyleHeading } from "../../../../../utils/Constant";
import HorizontalStyleForm from "./HorizontalStyleForm";

const HorizontalStyle = () => {
  const subTitle = [
    {
      text: "horizontal style in mega-options. Use the",
      code: ".mega-horizontal",
    },
    { text: "class through created horizontal alignments." },
  ];
  return (
    <Col sm={12} xxl={6} className="box-col-12">
      <Card className="height-equal">
        <CommonHeader title={HorizontalStyleHeading} subTitle={subTitle} headClass="pb-0"/>
        <CardBody>
          <HorizontalStyleForm />
        </CardBody>
        <CommonCardFooter />
      </Card>
    </Col>
  );
};

export default HorizontalStyle;
