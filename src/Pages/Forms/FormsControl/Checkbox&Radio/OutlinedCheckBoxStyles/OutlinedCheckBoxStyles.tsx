import { Card, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { OutlinedCheckBoxStylesHeading } from "../../../../../utils/Constant";
import OutLineCheckBoxCardBody from "./OutLineCheckBoxCardBody";

const OutlinedCheckBoxStyles = () => {
  const subTitle = [
    {
      code: `[multiple selected]`,
      text: `The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button. `,
    },
    {
      text: `.`,
    },
  ];
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={OutlinedCheckBoxStylesHeading} subTitle={subTitle} headClass="pb-0"/>
        <OutLineCheckBoxCardBody />
      </Card>
    </Col>
  );
};

export default OutlinedCheckBoxStyles;
