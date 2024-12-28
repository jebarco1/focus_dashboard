import { Card, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { RaiseInputStyleHeading } from "../../../../../utils/Constant";
import RaiseInputStyleForm from "./RaiseInputStyleForm";

const RaiseInputStyle = () => {
  const subTitle = [
    {
      text: `Use the`,
      code: `input-air-*`,
    },
    {
      text: `through defined bottom box-shadow.`,
    },
  ];
  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonHeader
          title={RaiseInputStyleHeading}
          subTitle={subTitle}
        />
        <RaiseInputStyleForm />
      </Card>
    </Col>
  );
};

export default RaiseInputStyle;
