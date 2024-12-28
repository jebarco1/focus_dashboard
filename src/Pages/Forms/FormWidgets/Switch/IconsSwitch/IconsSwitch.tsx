import { Card, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { IconsWithHeading } from "../../../../../utils/Constant";
import CommonIconsSwitch from "../CommonIconsSwitch/CommonIconsSwitch";
import { iconsSwitchData } from "../../../../../Data/Forms/FormWidgets/SwitchData";

const IconsSwitch = () => {
  const subTitle = [
    {
      text: "Use the",
      code: ".switch-state ",
    },
    {
      text: "and",
      code: "icon-state ",
    },
    {
      text: "through defined icons switches.",
    },
  ];
  return (
    <Col xl={4} sm={6}>
      <Card className="height-equal">
        <CommonHeader title={IconsWithHeading} subTitle={subTitle} headClass="pb-0"/>
        <CommonIconsSwitch switchData={iconsSwitchData} mediaBodyClassName="icon-state" />
      </Card>
    </Col>
  );
};

export default IconsSwitch;
