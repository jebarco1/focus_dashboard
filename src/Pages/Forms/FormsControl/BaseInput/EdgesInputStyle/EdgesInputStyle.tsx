import { Card, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import EdgesInputStyleForm from "./EdgesInputStyleForm";
import { EdgesInputStyleHeading } from "../../../../../utils/Constant";

const EdgesInputStyle = () => {
  const subTitle = [
    {
      text: `Use the`,
      code: `.btn-pill`,
    },
    {
      text: `through defined border-radius.`,
    },
  ];
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={EdgesInputStyleHeading} subTitle={subTitle} headClass="pb-0"/>
        <EdgesInputStyleForm />
      </Card>
    </Col>
  );
};

export default EdgesInputStyle;
