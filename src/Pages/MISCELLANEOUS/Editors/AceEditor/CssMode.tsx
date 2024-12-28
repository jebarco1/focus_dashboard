import { Card, CardBody, Col } from "reactstrap";
import { CSSModeHeading } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { cssData } from "../../../../Data/Editor/EditorData";

const CssMode = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={CSSModeHeading} />
        <CardBody>
          <AceEditor
            className="aceEditor w-auto"
            mode="css"
            theme="monokai"
            value={cssData}
            name="blah2"
            setOptions={{ useWorker: false }}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            editorProps={{ $blockScrolling: true }}
            highlightActiveLine={true}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default CssMode;
