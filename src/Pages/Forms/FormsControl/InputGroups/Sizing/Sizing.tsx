import { Card, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { SizingHeader } from "../../../../../utils/Constant";
import SizingCardBody from "./SizingCardBody";

const Sizing = () => {
  const subTitle = [
    {
      text: "Add the relative form sizing classes to the",
      code: " .input-group",
    },
    {
      text: "itself and contents within will automatically resize—no need for repeating the form control size classes on each element.",
    },
  ];
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={SizingHeader} subTitle={subTitle} headClass="pb-0" />
        <SizingCardBody />
      </Card>
    </Col>
  );
};

export default Sizing;
