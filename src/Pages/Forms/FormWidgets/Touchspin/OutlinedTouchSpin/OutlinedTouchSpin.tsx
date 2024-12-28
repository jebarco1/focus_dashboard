import { Card, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { OutLinedTouchSpinHeading } from "../../../../../utils/Constant";
import CommonTouchSpin from "../CommonTouchSpin";
import { outLinesTouchSpinData } from "../../../../../Data/Forms/FormWidgets/TouchSpinData";

const OutlinedTouchSpin = () => {
  const subTitle = [
    {
      text: "Use the",
      code: ".decrement-touchspin ",
    },
    {
      text: "and",
      code: ".increment-touchspin ",
    },
    { text: "class." }
  ];
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader
          title={OutLinedTouchSpinHeading}
          subTitle={subTitle}
        />
        <CommonTouchSpin touchSpinClassNames={outLinesTouchSpinData} />
      </Card>
    </Col>
  );
};

export default OutlinedTouchSpin;
