import { CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { MultiplePaintingsLabel, PleaseDoComments } from '../../../../../utils/Constant'

const FlatInputStyleForm = () => {
    const multiplePaintingsItems = ["Landscape", "Portrait ", "Oil Painting", "Abstract art", "Acrylic"]
  return (
    <Form className="theme-form dark-inputs">
      <CardBody>
        <Row>
          <Col>
            <FormGroup>
              <Label>{'Select your favorite roman number'}</Label>
              <Input type='select' className="form-select btn-square digits" defaultValue={"I"}>
                <option>I </option>
                <option>II </option>
                <option>III</option>
                <option>IV </option>
                <option>V </option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{MultiplePaintingsLabel}</Label>
              <Input type='select' className="form-select btn-square digits" multiple>
                {multiplePaintingsItems.map((data, index) => (<option key={index} className="rounded-0">{data}</option>))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <Label>{PleaseDoComments}</Label>
              <Input type="textarea" className="btn-square" rows={3} defaultValue={""}/>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Form>
  )
}

export default FlatInputStyleForm