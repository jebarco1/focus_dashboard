import { Card, CardBody, Col } from "reactstrap";
import ValidationsForm from "./ValidationsForm";
import { ValidationFormHeading } from "../../../../../utils/Constant";
import CommonHeader from "../../../../../Common/CommonHeader";

const ValidationForm = () => {
  const subTitle = [
    {
      text: "Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback.Background icons for",
      code: `<select>`,
    },
    {
      text: "s are only available with ",
      code: `.form-select`,
    },
    {
      text: "and not",
      code: ".form-control.",
    },
  ];
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonHeader
          title={ValidationFormHeading}
          subTitle={subTitle}
          headClass="pb-0"
        />
        <CardBody>
          <ValidationsForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ValidationForm;
