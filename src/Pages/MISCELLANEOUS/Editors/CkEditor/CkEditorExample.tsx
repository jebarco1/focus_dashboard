import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { CkEditors } from "../../../../utils/Constant";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CkEditorExample = () => {
  const InnerText: string = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate urna, sed dignissim arcu. Aliquam at ligula imperdiet, faucibus ante a, interdum enim. Sed in mauris a lectus lobortis condimentum. Sed in nunc magna. Quisque massa urna, cursus vitae commodo eget, rhoncus nec erat. Sed sapien turpis, elementum sit amet elit vitae, elementum gravida eros. In ornare tempus nibh ut lobortis. Nam venenatis justo ex, vitae vulputate neque laoreet a.</p>";
  return (
    <Row>
      <Col sm="12">
        <Card>
          <CommonHeader title={CkEditors} />
          <CardBody>
            <CKEditor editor={ClassicEditor} data={InnerText} />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default CkEditorExample;
