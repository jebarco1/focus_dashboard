import { CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Comments, DefaultInput, EmailAddress, FavoritePixelStrapTheme, Female, FileInputExample, Male, Password } from '../../../../../utils/Constant'
import CommonCardFooter from '../../../../../CommonElements/Footer/CommonCardFooter';

const EdgesInputStyleForm = () => {
    const themeList = ["Tivo","Cion","Roxo","Oslo","Voxo","Sheltos ","Petkart","Zeta",];
  return (
    <Form onSubmit={(event)=>event.preventDefault()} className="theme-form dark-inputs">
      <CardBody>
        <Row>
          <Col>
            <FormGroup>
              <Label>{EmailAddress}</Label>
              <Input className="btn-pill" type="email" placeholder="name@example.com"/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{Password}</Label>
              <Input className="btn-pill" type="password" placeholder="Password" autoComplete=''/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{FavoritePixelStrapTheme}</Label>
              <Input type='select' className="form-select btn-pill digits">
                {themeList.map((data, index) => (<option key={index}>{data}</option>))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{FileInputExample}</Label>
              <Input className="btn-pill px-4" type="file" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{DefaultInput}</Label>
              <Input type="text" placeholder="Default input" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup className="d-flex gap-3 checkbox-checked">
              <FormGroup check>
                <Input className="form-check-input" id="flexRadioDefault1" type="radio" name="flexRadioDefault"/>
                <Label className="form-check-label mb-0" htmlFor="flexRadioDefault1">{Male}</Label>
              </FormGroup>
              <FormGroup check>
                <Input className="form-check-input" id="flexRadioDefault2" type="radio" name="flexRadioDefault" defaultChecked/>
                <Label className="form-check-label mb-0" htmlFor="flexRadioDefault2">{Female}</Label>
              </FormGroup>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <Label>{Comments}</Label>
              <Input type="textarea" className="btn-pill" rows={3} defaultValue={""}/>
            </div>
          </Col>
        </Row>
      </CardBody>
      <CommonCardFooter />
    </Form>
  )
}

export default EdgesInputStyleForm