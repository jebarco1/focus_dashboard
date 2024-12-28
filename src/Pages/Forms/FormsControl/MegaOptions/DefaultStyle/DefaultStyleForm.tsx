import { Badge, Card, Col, Form, FormGroup, Input, Label, Media, Row } from 'reactstrap'
import { defaultStyleFormData } from '../../../../../Data/Forms/FormsControl/MegaOptionData'
import { INR } from '../../../../../utils/Constant'

const DefaultStyleForm = () => {
  return (
    <Form className="mega-inline">
      <Row>
        {defaultStyleFormData.map((data, index) => (
          <Col sm={6} key={index}>
            <Card>
              <Media className="p-20">
                <FormGroup check className="radio radio-primary m-0">
                  <Input id={`radio-${index}`} type="radio" name="radio1" />
                  <Label className="form-check-label" htmlFor={`radio-${index}`}>
                    <Media body className="megaoption-space">
                      <span className="mt-0 mega-title-badge">{data.Type}
                        <Badge color={data.priceClassName} className={`pull-right digits`}>{data.price} {INR}</Badge>
                      </span>
                      <span>{'Estimated'} {data.deliveryTime} {'Day Shipping ( Duties end tax may be due delivery )'}</span>
                    </Media>
                  </Label>
                </FormGroup>
              </Media>
            </Card>
          </Col>
        ))}
      </Row>
    </Form>
  )
}

export default DefaultStyleForm