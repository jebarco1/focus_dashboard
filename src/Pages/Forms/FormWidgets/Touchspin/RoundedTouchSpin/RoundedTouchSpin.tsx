import { Card, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { RoundedTouchSpinHeading } from "../../../../../utils/Constant";
import CommonTouchSpin from "../CommonTouchSpin";
import { defaultTouchSpinData } from "../../../../../Data/Forms/FormWidgets/TouchSpinData";

const RoundedTouchSpin = () => {
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
    <Col xl={12}>
      <Card>
        <CommonHeader
          title={RoundedTouchSpinHeading}
          subTitle={subTitle}
        />
        <CommonTouchSpin
          arrowIcon
          touchSpinClassNames={defaultTouchSpinData}
          cardBodyClassName="rounded-touchspin"
        />
      </Card>
    </Col>
  );
};

export default RoundedTouchSpin;
