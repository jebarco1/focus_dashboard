import { Button, Col, Form, Input, InputGroup, InputGroupText, Label, Row } from 'reactstrap'
import { City, CityError, FirstName, LastName, State, StateError, SubmitForm, UserName, UserNameError, ValidFeedBack, Zip, ZipError } from '../../../../../utils/Constant'
import { useState } from 'react';

const TooltipFormValidationForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <Form onSubmit={(event) => event.preventDefault()} className={`needs-validation custom-input ${formSubmitted ? "was-validated" : ""}`} noValidate>
      <Row className='g-3'>
        <Col md={4} className="position-relative">
            <Label>{FirstName}</Label>
            <Input type="text" placeholder="Mark" required />
            <div className="valid-tooltip">{ValidFeedBack}</div>
        </Col>
        <Col md={4} className="position-relative">
            <Label>{LastName}</Label>
            <Input type="text" placeholder="Otto" required />
            <div className="valid-tooltip">{ValidFeedBack}</div>
        </Col>
        <Col md={4} className="position-relative">
            <Label>{UserName}</Label>
            <InputGroup className="has-validation">
                <InputGroupText>@</InputGroupText>
                <Input type="text" required/>
                <div className="invalid-tooltip">{UserNameError}</div>
            </InputGroup>
        </Col>
        <Col md={6} className="position-relative">
            <Label>{City}</Label>
            <Input type="text" required />
            <div className="invalid-tooltip">{CityError}</div>
        </Col>
        <Col md={3} className="position-relative">
            <Label>{State}</Label>
            <Input name="select" type="select" className="form-select" required>
                <option>Choose...</option>
                <option>U.S </option>
                <option>Thailand </option>
                <option>India </option>
                <option>U.K</option>
            </Input>
            <div className="invalid-tooltip">{StateError}</div>
        </Col>
        <Col md={3} className=" position-relative">
            <Label>{Zip}</Label>
            <Input type="text" required />
            <div className="invalid-tooltip">{ZipError}</div>
        </Col>
        <Col xs={12}>
            <Button color="primary" onClick={() => setFormSubmitted(true)} type="submit">{SubmitForm}</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default TooltipFormValidationForm