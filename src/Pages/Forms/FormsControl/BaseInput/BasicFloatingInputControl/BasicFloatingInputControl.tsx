import { Card, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import BasicFloatingInputControlForm from "./BasicFloatingInputControlForm";
import { BasicFloatingInputControlHeading } from "../../../../../utils/Constant";

const BasicFloatingInputControl = () => {
  const subTitle = [
    {
      text: `Give textual form controls like`,
      code: `<input>`,
    },
    {
      code: `<textarea>`,
      text: `s and`,
    },
    {
      text: "s an upgrade with custom styles, sizing, focus states, and more.",
    }
  ];
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonHeader title={BasicFloatingInputControlHeading} subTitle={subTitle} headClass="pb-0"/>
        <BasicFloatingInputControlForm />
      </Card>
    </Col>
  );
};

export default BasicFloatingInputControl;
