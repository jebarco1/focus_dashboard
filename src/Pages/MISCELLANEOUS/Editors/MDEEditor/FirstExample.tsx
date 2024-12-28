import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { FirstExamples, MdeEditorText } from "../../../../utils/Constant";
import { SimpleMdeReact } from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const FirstExample = () => {
  return (
    <Row>
      <Col sm={12}>
        <Card>
          <CommonHeader title={FirstExamples} />
          <CardBody>
            <SimpleMdeReact
              id="editor_container"
              value={MdeEditorText}
              options={{ autofocus: true, spellChecker: false }}
            />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default FirstExample;
