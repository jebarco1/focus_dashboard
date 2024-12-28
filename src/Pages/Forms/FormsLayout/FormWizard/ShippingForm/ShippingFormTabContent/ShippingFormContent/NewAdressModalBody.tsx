import { Col, Form, Input, Label, ModalBody, Row } from 'reactstrap'
import { Address, AddressType, ContactNo, Name } from '../../../../../../../utils/Constant'

const NewAdressModalBody = () => {
  return (
    <ModalBody>
      <Form className="needs-validation" noValidate>
        <Row className='g-3'>
            <Col xs={12}>
                <Label>{Name}</Label>
                <Input type="text" placeholder="Enter your name" required />
            </Col>
            <Col xs={12}>
                <Label>{Address}</Label>
                <Input type="textarea" rows={3} placeholder="Enter your address..." defaultValue={""}/>
            </Col>
            <Col xs={12}>
                <Label className="w-100">
                    {AddressType}
                    <Input type="select" required>
                        <option selected>{'Home'}</option>
                        <option>{'Office'}</option>
                    </Input>
                </Label>
            </Col>
            <Col xs={12}>
                <Label>{ContactNo}</Label>
                <Input type="number" placeholder={"123456789"} />
            </Col>
        </Row>
      </Form>
    </ModalBody>
  )
}

export default NewAdressModalBody