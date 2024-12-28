import { Badge, Card, Col, Form, Input, Label, Media, Row } from 'reactstrap'
import { P } from '../../../../../AbstractElements'
import { DeliveryOptionHeading } from '../../../../../utils/Constant'
import { horizontalStyleFormData } from '../../../../../Data/Forms/FormsControl/MegaOptionData'
import BuyingOption from './BuyingOption'

const HorizontalStyleForm = () => {
  return (
    <Form className="mega-horizontal">
      <Row>
        <Col sm={3}>
          <P className="mega-title">{DeliveryOptionHeading}</P>
        </Col>
        <Col sm={9}>
          {horizontalStyleFormData.map((data, index) => (
            <Card key={index}>
              <div className="p-20 d-flex">
                <div className={`radio form-check radio-${data.className} m-0 w-100`}>
                  <Input id={`horizontalStyleForm-${index}`} type="radio" name="radio22"/>
                  <Label className="form-check-label mb-0 w-100" htmlFor={`horizontalStyleForm-${index}`}>
                    <Media body className="megaoption-space">
                      <span className="mt-0 mega-title-badge">
                        {data.deliveryType}
                        <Badge color={data.className} className={`pull-right digits`}>{data.price}</Badge>
                      </span>
                      <span>{data.text}</span>
                    </Media>
                  </Label>
                </div>
              </div>
            </Card>
          ))}
        </Col>
        <BuyingOption />
      </Row>
    </Form>
  )
}

export default HorizontalStyleForm