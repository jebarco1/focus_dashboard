import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { BlogPostText, Category, Content } from "../../../../utils/Constant";
import { Typeahead } from "react-bootstrap-typeahead";
import { SimpleMdeReact } from "react-simplemde-editor";

const PostEdit = () => {
  const postData = ["Text", "Image", "Audio", "Video"];
  const data = [{ name: 'Lifestyle' }, { name: 'Travel' }];
  return (
    <Form className=" needs-validation" noValidate>
      <Row>
        <Col sm="12">
          <FormGroup>
            <Label htmlFor="validationCustom01">{"Title"}:</Label>
            <Input id="validationCustom01" type="text" placeholder="Post Title" required/>
          </FormGroup>
          <FormGroup>
            <Label>{"Type"}:</Label>
            <div className="m-checkbox-inline">
              {postData.map((data,i) => (
                <Label htmlFor={`edo-ani${data}`} key={i}>
                  <Input className="radio_animated" id={`edo-ani${data}`} type="radio" name="rdo-ani" defaultChecked/>
                  {data}
                </Label>
              ))}
            </div>
          </FormGroup>
          <FormGroup>
            <div className="col-form-label">
              {Category}:
              <Typeahead id='multiple-typeahead' className='mt-2' clearButton  labelKey='name' multiple options={data} placeholder='Select Your Name....' />
            </div>
          </FormGroup>
          <div className="email-wrapper">
            <div className="theme-form">
              <FormGroup>
                <Label>{Content}:</Label>
                <SimpleMdeReact id="editor_container"  value={BlogPostText} options={{ autofocus: true, spellChecker: false}}/>
              </FormGroup>
            </div>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default PostEdit;
