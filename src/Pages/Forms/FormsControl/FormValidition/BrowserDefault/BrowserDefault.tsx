import { Card, CardBody, Col } from "reactstrap";
import { BrowserDefaultsHeading } from "../../../../../utils/Constant";
import BrowserDefaultForm from "./BrowserDefaultForm";
import CommonHeader from "../../../../../Common/CommonHeader";

const BrowserDefault = () => {
   const subTitle = [
        {
            text: `Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? Depending on your browser and OS,While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.`,
        }
    ]
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonHeader title={BrowserDefaultsHeading} subTitle={subTitle} headClass="pb-0"/>
        <CardBody className="custom-input">
            <BrowserDefaultForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BrowserDefault;
