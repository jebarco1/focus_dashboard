import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import CommonCardFooter from "../../../../../CommonElements/Footer/CommonCardFooter";
import { InlineStyleHeading } from "../../../../../utils/Constant";
import InlineStyleForm from "./InlineStyleForm";

const InlineStyle = () => {
  const subTitle = [
    { text: "For Create inline megaoption add", code: ".mega-inline" },
    { text: "class in form tag" },
  ];
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={InlineStyleHeading} subTitle={subTitle} headClass="pb-0" />
        <CardBody className="megaoptions-border-space-sm">
          <InlineStyleForm />
        </CardBody>
        <CommonCardFooter />
      </Card>
    </Col>
  );
};

export default InlineStyle;
