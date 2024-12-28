import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { AceEditors, Editor } from "../../../../utils/Constant";
import JavascriptMode from "./JavascriptMode";
import HtmlMode from "./HtmlMode";
import CssMode from "./CssMode";
import JavaMode from "./JavaMode";

const AceEditor = () => {
  return (
    <>
      <Breadcrumbs mainTitle={AceEditors} parent={Editor} title={AceEditors} />
      <Container fluid>
        <Row>
            <JavascriptMode />
            <HtmlMode />
            <CssMode />
            <JavaMode />
        </Row>
      </Container>
    </>
  );
};

export default AceEditor;
