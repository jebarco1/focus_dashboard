import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { AgreeConditions, AgreeFeedback, ChooseFile, City, CityError, Description, FavoritePixelStrapTheme, FirstName, InvalidFormFileSelected, InvalidMessageError, InvalidSelectFeedBack, MasterCard, NameError, Password, PasswordError, SelectYourPaymentMethod, State, StateError, SubmitForm, ValidFeedBack, Visa, Zip, ZipError } from '../../../../../utils/Constant'
import { useState } from 'react'
import { H6 } from '../../../../../AbstractElements'

const ValidationsForm = () => {
  const [formSubmit, setFormSubmit] = useState(false)
  return (
    <Form onSubmit={(e)=>e.preventDefault()} className={`needs-validation custom-input ${formSubmit ? "was-validated":""}`} noValidate>
      <Row className="g-3">
        <Col xs={12} >
          <Label>{FirstName}</Label>
          <Input type="text" placeholder="Mark" required />
          <div className="invalid-feedback">{NameError} </div>
          <div className="valid-feedback">{ValidFeedBack}</div>
        </Col>
        <Col xs={12}>
          <Label className="col-form-label" >{Password}</Label>
          <Input type="password" required autoComplete='' />
          <div className="invalid-feedback">{PasswordError}</div>
        </Col>
        <Col xs={12}>
          <Label>{State}</Label>
          <Input name="select" type="select" className="form-select" required>
            <option>Choose...</option>
            <option>UK</option>
            <option>India</option>
            <option>Thailand</option>
            <option>Newyork</option>
          </Input>
          <div className="invalid-feedback">{StateError}</div>
          <div className="valid-feedback">{ValidFeedBack}</div>
        </Col>
        <Col md={6}>
          <Label>{City}</Label>
          <Input type="text" required />
          <div className="invalid-feedback">{CityError}</div>
          <div className="valid-feedback">{ValidFeedBack}</div>
        </Col>
        <Col md={6}>
          <Label>{Zip}</Label>
          <Input  type="text" required />
          <div className="invalid-feedback">{ZipError}</div>
          <div className="valid-feedback">{ValidFeedBack}</div>
        </Col>
        <Col xs={12}> 
          <div className="card-wrapper border rounded-3 checkbox-checked">
            <H6 className="sub-title">{SelectYourPaymentMethod}</H6>
            <div className="radio-form">
              <FormGroup check>
                <Input id="validationFormCheck25" type="radio" name="radio-stacked" required />
                <Label className="form-check-label" htmlFor="validationFormCheck25">{MasterCard}</Label>
              </FormGroup>
              <FormGroup check>
                <Input id="validationFormCheck23" type="radio" name="radio-stacked" required />
                <Label className="form-check-label" htmlFor="validationFormCheck23">{Visa}</Label>
              </FormGroup>
            </div>
          </div>
        </Col>
        <Col xs={12}> 
          <select className="form-select" required aria-label="select example">
            <option >{FavoritePixelStrapTheme}</option>
            <option value={1}>{'Cion'}</option>
            <option value={2}>{'Tivo'}</option>
            <option value={3}>{'Wingo'}</option>
          </select>
          <div className="invalid-feedback">{InvalidSelectFeedBack}</div>
        </Col>
        <Col xs={12}> 
          <Label>{ChooseFile}</Label>
          <Input type="file" aria-label="file example" required />
          <div className="invalid-feedback">{InvalidFormFileSelected}</div>
        </Col>
        <Col xs={12}> 
          <Label>{Description}</Label>
          <Input type="textarea" placeholder="Enter your comment" required defaultValue={""} />
          <div className="invalid-feedback">{InvalidMessageError}</div>
        </Col>
        <Col xs={12}>
          <FormGroup check>
            <Input type="checkbox" required />
            <Label className="form-check-label">{AgreeConditions}</Label>
            <div className="invalid-feedback">{AgreeFeedback}</div>
          </FormGroup>
        </Col>
        <Col xs={12}>
          <Button color="primary" onClick={()=>setFormSubmit(true)}  type="submit">{SubmitForm}</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default ValidationsForm