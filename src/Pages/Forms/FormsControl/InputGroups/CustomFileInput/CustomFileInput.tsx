import { Card, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { CustomFileInputHeading } from "../../../../../utils/Constant";
import CustomFileInputCardBody from "./CustomFileInputCardBody";

const CustomFileInput = () => {
  const subTitle = [
    {
      text: "Input groups include support for custom selects and custom",
      code: "file uploads",
    },
    {
      text: ". Browser default versions of these are not supported.",
    },
  ];
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonHeader title={CustomFileInputHeading} subTitle={subTitle} headClass="pb-0"/>
        <CustomFileInputCardBody />
      </Card>
    </Col>
  );
};

export default CustomFileInput;
