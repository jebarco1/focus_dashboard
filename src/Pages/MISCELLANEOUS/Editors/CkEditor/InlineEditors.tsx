import { Card, CardBody, Col, Row } from "reactstrap";
import { InlineEditor } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const InlineEditors = () => {
   const editorData = "<H1>Your title</H1><P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate urna, sed dignissim arcu. Aliquam at ligula imperdiet, faucibus ante a, interdum enim. Sed in mauris a lectus lobortis condimentum. Sed in nunc magna. Quisque massa urna, cursus vitae commodo eget, rhoncus nec erat. Sed sapien turpis, elementum sit amet elit vitae, elementum gravida eros. In ornare tempus nibh ut lobortis. Nam venenatis justo ex, vitae vulputate neque laoreet a.</P>"
  return (
    <Row>
      <Col sm={12}>
        <Card>
          <CommonHeader title={InlineEditor} />
          <CardBody>
            <CKEditor
              editor={ClassicEditor}
              data={editorData}
            />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default InlineEditors;
