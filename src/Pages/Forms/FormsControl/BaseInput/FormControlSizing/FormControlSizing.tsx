import { Card, CardBody, Col, Input } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { FormControlSizingHeading } from "../../../../../utils/Constant";

const FormControlSizing = () => {
  const subTitle = [
    {
      text: `Set heights using classes like`,
      code: ".form-control-lg",
    },
    {
      code: `.form-control-sm`,
      text: `and`,
    },
  ];
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={FormControlSizingHeading} subTitle={subTitle}/>
        <CardBody>
          <Input className="form-control-sm" type="text" placeholder=".form-control-sm"/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FormControlSizing;
