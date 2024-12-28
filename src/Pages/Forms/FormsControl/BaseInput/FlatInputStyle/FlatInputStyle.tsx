import { Card, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { FlatInputStyleHeading } from "../../../../../utils/Constant";
import FlatInputStyleForm from "./FlatInputStyleForm";

const FlatInputStyle = () => {
  const subTitle = [
    {
      code: `.btn-square `,
      text: `Use the`,
    },
    {
      text: `through defined 0px border-radius.`,
    },
  ];
  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonHeader
          title={FlatInputStyleHeading}
          subTitle={subTitle}
          headClass="pb-0"
        />
        <FlatInputStyleForm />
      </Card>
    </Col>
  );
};

export default FlatInputStyle;
