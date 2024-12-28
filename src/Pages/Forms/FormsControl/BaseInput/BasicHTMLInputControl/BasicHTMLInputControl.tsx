import { Card, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import BasicHTMLInputControlForm from "./BasicHTMLInputControlForm";
import { BasicHTMLInputControlHeading } from "../../../../../utils/Constant";

const BasicHTMLInputControl = () => {
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
        <CommonHeader title={BasicHTMLInputControlHeading} subTitle={subTitle} headClass="pb-0"/>
        <BasicHTMLInputControlForm />
      </Card>
    </Col>
  );
};

export default BasicHTMLInputControl;
