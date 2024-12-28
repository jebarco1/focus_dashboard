import { Card, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import CommonIconsSwitch from "../CommonIconsSwitch/CommonIconsSwitch";
import { BordersWithIconsHeading } from "../../../../../utils/Constant";
import { borderedSwitchData } from "../../../../../Data/Forms/FormWidgets/SwitchData";

const BordersWithIcons = () => {
  const subTitle = [
    {
      text: "Use the",
      code: ".switch-outline ",
    },
    {
      text: "and",
      code: ".icon-state",
    },
    { text: "class through created outline and icons. " }
  ];
  return (
    <Col xl={4} sm={6}>
      <Card className="height-equal">
        <CommonHeader
          title={BordersWithIconsHeading}
          subTitle={subTitle}
          headClass="pb-0"
        />
        <CommonIconsSwitch switchData={borderedSwitchData} mediaBodyClassName="icon-state switch-outline" />
      </Card>
    </Col>
  );
};

export default BordersWithIcons;
