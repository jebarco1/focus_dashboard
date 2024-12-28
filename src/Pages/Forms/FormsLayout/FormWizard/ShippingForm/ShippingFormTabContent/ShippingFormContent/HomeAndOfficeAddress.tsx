import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { ShippingInformationCommonProps } from '../../../../../../../Types/Forms/FormLayout/FormWizardTypes'
import { H3 } from '../../../../../../../AbstractElements';
import { homeAndOfficeAddressData } from '../../../../../../../Data/Forms/FormsLayout/FormWizardData';
import { Address, Contact } from '../../../../../../../utils/Constant';

const HomeAndOfficeAddress = ({radioBoxValues,getUserData,}: ShippingInformationCommonProps) => {
    const { address } = radioBoxValues;
  return (
    <Row className="g-3">
      {homeAndOfficeAddressData.map((data, index) => (
        <Col xxl={4} sm={6} key={index}>
          <div className="card-wrapper border rounded-3 h-100 light-card">
            <div className="collect-address">
              <div className="d-flex gap-2 align-items-center">
                <FormGroup check className="radio radio-primary">
                  <Input id={data.value} type="radio" name="address" value={data.value} checked={address === data.value} onChange={getUserData}/>
                  <Label className="form-check-label mb-0" htmlFor={data.value}>
                    {data.label}
                  </Label>
                </FormGroup>
              </div>
              <div className="card-icon">
                <i className="fa fa-pencil" />
                <i className="fa fa-trash-o" />
              </div>
            </div>
            <div className="shipping-address">
              <H3>{data.name}</H3>
              <span>{Address}: {data.adress}</span>
              <span>{Contact}: {data.contact}</span>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default HomeAndOfficeAddress