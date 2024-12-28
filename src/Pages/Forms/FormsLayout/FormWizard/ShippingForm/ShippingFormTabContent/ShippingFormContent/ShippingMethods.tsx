import { Button, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { ShippingInformationCommonProps } from '../../../../../../../Types/Forms/FormLayout/FormWizardTypes';
import { ProceedtoNext } from '../../../../../../../utils/Constant';
import { shippingMethodsData } from '../../../../../../../Data/Forms/FormsLayout/FormWizardData';
import { P } from '../../../../../../../AbstractElements';

const ShippingMethods = ({radioBoxValues,getUserData,handleNextButton}: ShippingInformationCommonProps) => {
  const { shippingMethod } = radioBoxValues;
  return (
    <Row className="shipping-method g-3">
      {shippingMethodsData.map((data, index) => (
        <Col sm={6} key={index}>
          <div className="card-wrapper border rounded-3 h-100 light-card">
            <FormGroup check className="radio radio-primary">
              <Input id={data.value} type="radio" name="shippingMethod" value={data.value} checked={shippingMethod === data.value} onChange={getUserData}/>
              <Label className="form-check-label mb-0" htmlFor={data.value}>
                {data.label}
              </Label>
            </FormGroup>
            <P>{data.details}</P>
          </div>
        </Col>
      ))}
      <Col xs={12} className="text-end">
        <Button onClick={handleNextButton} color="primary">{ProceedtoNext}
          <i className="fa fa-truck proceed-next pe-2" />
        </Button>
      </Col>
    </Row>
  )
}

export default ShippingMethods