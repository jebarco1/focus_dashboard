import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { BasicFormHeading } from "../../../../../utils/Constant";
import FormBasic from "./FormBasic";

const BasicForm = () => {
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
        <CommonHeader title={BasicFormHeading} subTitle={subTitle} headClass="pb-0"/>
        <CardBody>
          <div className="card-wrapper border rounded-3">
            <FormBasic />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicForm;
