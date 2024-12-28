import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import FormFloating from "./FormFloating";
import { FloatingFormHeading } from "../../../../../utils/Constant";

const FloatingForm = () => {
  const subTitle = [
    {
      text: "Use the",
      code: `.form-label `,
    },
    {
      text: "and",
      code: `.form-control `,
    },
    {
      text: "through create basic form.",
    },
  ];
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={FloatingFormHeading} subTitle={subTitle} headClass="pb-0"/>
        <CardBody>
          <div className="card-wrapper border rounded-3">
            <FormFloating />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FloatingForm;
