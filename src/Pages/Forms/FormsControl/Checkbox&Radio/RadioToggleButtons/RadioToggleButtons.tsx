import { Card, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { RadioToggleButtonsHeading } from "../../../../../utils/Constant";
import RadioToggleButtonsCardBody from "./RadioToggleButtonsCardBody";

const RadioToggleButtons = () => {
  const subTitle = [
    {
      code: `[any one selected]`,
      text: `The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button. `,
    },
    {
      text: `.`,
    },
  ];
  return (
    <Col md={6}>
      <Card>
        <CommonHeader
          title={RadioToggleButtonsHeading}
          subTitle={subTitle}
        />
        <RadioToggleButtonsCardBody />
      </Card>
    </Col>
  );
};

export default RadioToggleButtons;
