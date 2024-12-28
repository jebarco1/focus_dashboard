import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '../../../../Common/CommonHeader'
import { HTMLModeHeading } from '../../../../utils/Constant'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { htmlData } from '../../../../Data/Editor/EditorData';

const HtmlMode = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={HTMLModeHeading} />
        <CardBody>
          <AceEditor
            className="aceEditor w-auto"
            mode="html"
            theme="monokai"
            value={htmlData}
            name="blah2"
            fontSize={14}
            setOptions={{ useWorker: false }}
            showPrintMargin={true}
            showGutter={true}
            editorProps={{ $blockScrolling: true }}
            highlightActiveLine={true}
          />
        </CardBody>
      </Card>
    </Col>
  )
}

export default HtmlMode