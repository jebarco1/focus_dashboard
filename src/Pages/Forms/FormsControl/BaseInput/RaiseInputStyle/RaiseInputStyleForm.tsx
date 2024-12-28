import { CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Comments, EmailAddress, FavoritePixelStrapTheme, Password, SelectTheColorHeading } from '../../../../../utils/Constant'
import CommonCardFooter from '../../../../../CommonElements/Footer/CommonCardFooter'

const RaiseInputStyleForm = () => {
    const themeList = ["Tivo","Cion","Roxo","Oslo","Voxo","Sheltos ","Petkart","Zeta",];
    const colorList = ["Red", "Yellow", "Orange", "White", "Black", "Gray ", "Brown", "Purple ", "White"]
  return (
    <Form onSubmit={(event)=>event.preventDefault()} className="theme-form dark-inputs">
      <CardBody>
        <Row>
          <Col>
            <FormGroup>
              <Label>{EmailAddress}</Label>
              <Input className="input-air-primary" type="email" placeholder="name@example.com"/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{Password}</Label>
              <Input className="input-air-primary" type="password" placeholder="Password" autoComplete=''/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{FavoritePixelStrapTheme}</Label>
              <Input type='select' className={`form-select input-air-primary digits`} defaultValue={"Tivo"}>
                {themeList.map((data, index) => (<option key={index}>{data}</option>))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{SelectTheColorHeading}</Label>
              <Input type='select' className="form-select input-air-primary digits" multiple>
                {colorList.map((data, index) => (<option key={index} className="rounded-0">{data}</option>))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <Label>{Comments}</Label>
              <Input type="textarea" className="input-air-primary"  rows={3} defaultValue={""}/>
            </div>
          </Col>
        </Row>
      </CardBody>
      <CommonCardFooter />
    </Form>
  )
}

export default RaiseInputStyleForm