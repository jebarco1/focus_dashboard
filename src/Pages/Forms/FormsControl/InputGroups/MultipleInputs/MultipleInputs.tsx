import { Card, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { MultipleInputsHeading } from "../../../../../utils/Constant";
import MultipleInputsCardBody from "./MultipleInputsCardBody";

const MultipleInputs = () => {
  const subTitle = [
    {
      text: "While multiple",
      code: `<input>`,
    },
    {
      text: "s are supported visually, validation styles are only available for input groups with a single ",
      code: `<input>`,
    },
    {
      text: ".",
    },
  ];
  return (
    <Col md={6}>
      <Card>
        <CommonHeader
          title={MultipleInputsHeading}
          subTitle={subTitle}
        />
        <MultipleInputsCardBody />
      </Card>
    </Col>
  );
};

export default MultipleInputs;
