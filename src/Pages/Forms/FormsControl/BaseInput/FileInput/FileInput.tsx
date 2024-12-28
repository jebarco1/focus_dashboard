import { Card, CardBody, Col, FormGroup, Input, Label } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { DefaultExample, DisabledExample, FileInputHeading, LargeFileInputExample, MultipleExample,SmallFileInputExample} from "../../../../../utils/Constant";

const FileInput = () => {
  const subTitle = [
    {
      code: `<input>`,
      text: `For default file/multiple file/disabled file/small file/large file input for use`,
    },
    {
      code: `(type='file').`,
      text: `with`,
    },
  ];
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={FileInputHeading} subTitle={subTitle} headClass="pb-0"/>
        <CardBody>
          <FormGroup>
            <Label>{DefaultExample}</Label>
            <Input type="file" />
          </FormGroup>
          <FormGroup>
            <Label>{MultipleExample}</Label>
            <Input type="file" multiple />
          </FormGroup>
          <FormGroup>
            <Label>{DisabledExample}</Label>
            <Input type="file" disabled />
          </FormGroup>
          <FormGroup>
            <Label>{SmallFileInputExample}</Label>
            <Input className="form-control-sm" type="file" />
          </FormGroup>
          <div>
            <Label>{LargeFileInputExample}</Label>
            <Input className="form-control-lg" type="file" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FileInput;
