import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import CommonCardFooter from "../../../../../CommonElements/Footer/CommonCardFooter";
import { WithoutBordersStyleHeading } from "../../../../../utils/Constant";
import WithoutBordersStyleForm from "./WithoutBordersStyleForm";

const WithoutBordersStyle = () => {
  const subTitle = [
    {
      text: "By adding",
      code: ".plain-style ",
    },
    { text: "class to", code: ".mega-inline" },
    { text: "You can archive this style" },
  ];
  return (
    <Col sm={12} xxl={6} className="box-col-6">
      <Card>
        <CommonHeader title={WithoutBordersStyleHeading} subTitle={subTitle} headClass="pb-0"/>
        <CardBody>
          <WithoutBordersStyleForm />
        </CardBody>
        <CommonCardFooter />
      </Card>
    </Col>
  );
};

export default WithoutBordersStyle;
