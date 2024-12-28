import { Col, Form, Input, Label, Row } from 'reactstrap'
import { CardNumber, Currency, Delimiter, PhoneNumber, Prefix, Tailprefix } from '../../../../../utils/Constant'
import Cleave from "cleave.js/react";
const DefaultInputMaskForm = () => {
  return (
    <Form>
        <Row className='g-3'>
            <Col xxl={4} sm={6} > 
                <Label className="col-form-label" htmlFor="cleave-number-format">{Currency}</Label>          
                <Cleave className="form-control" options={{  numeral: true,numeralThousandsGroupStyle: 'thousand'}} placeholder="Enter number" />
            </Col>
            <Col xxl={4} sm={6}> 
                <Label className="col-form-label" htmlFor="cleave-type-prefix">{Prefix}</Label>
                <Cleave className="form-control" options={{prefix: 'PREFIX', delimiter: '-', blocks: [6, 4, 4, 4], uppercase: true}}/>
            </Col>
            <Col xxl={4} sm={6}>
                <Label className="col-form-label" htmlFor="cleave-type-delimiter">{Delimiter}</Label>
                <Cleave className="form-control" options={{ delimiters: ['.', '.', '-'], blocks: [3, 3, 3], uppercase: true}} placeholder="xxx·xxx·xxx" />
            </Col>
            <Col xxl={4} sm={6}>
                <Label>{PhoneNumber}</Label>
                <Input id="cleave-phone-number" type="text" placeholder="(xxx)xxx-xxxx" />
            </Col>
            <Col xxl={4} sm={6} >
                <Label>{CardNumber}</Label>
                <Cleave className="form-control" options={{creditCard: true}} placeholder="xxxx xxxx xxxx xxxx" />
            </Col>
            <Col xxl={4} sm={6}>
                <Label >{Tailprefix}</Label>
                <Input id="tailprefix" type="text" placeholder="€" />
            </Col>
        </Row>
    </Form>
  )
}

export default DefaultInputMaskForm