import { Card, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { DefaultTouchSpinHeading } from "../../../../../utils/Constant";
import CommonTouchSpin from "../CommonTouchSpin";
import { defaultTouchSpinData } from "../../../../../Data/Forms/FormWidgets/TouchSpinData";

const DefaultTouchSpin = () => {
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
          title={DefaultTouchSpinHeading}
          subTitle={subTitle}
          headClass="pb-0"
        />
        <CommonTouchSpin touchSpinClassNames={defaultTouchSpinData} />
      </Card>
    </Col>
  );
};

export default DefaultTouchSpin;
