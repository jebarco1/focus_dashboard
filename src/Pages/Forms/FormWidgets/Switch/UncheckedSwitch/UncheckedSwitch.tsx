import { Card, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { UncheckedSwitchHeading } from "../../../../../utils/Constant";
import CommonIconsSwitch from "../CommonIconsSwitch/CommonIconsSwitch";
import { unCheckedSwitchData } from "../../../../../Data/Forms/FormWidgets/SwitchData";

const UncheckedSwitch = () => {
  const subTitle = [
    {
      text: "Use the",
      code: ".bg-*",
    },
    {
      text: "class through created default switches.",
    }
  ];
  return (
    <Col xl={4} sm={6}>
      <Card className="height-equal">
        <CommonHeader
          title={UncheckedSwitchHeading}
          subTitle={subTitle}
          headClass="pb-0"
        />
        <CommonIconsSwitch switchData={unCheckedSwitchData} defaultUnChecked />
      </Card>
    </Col>
  );
};

export default UncheckedSwitch;
