import { Badge, Card, Col, Form, FormGroup, Input, Label, Media, Row } from 'reactstrap'
import { inlineStyleFormData } from '../../../../../Data/Forms/FormsControl/MegaOptionData'

const InlineStyleForm = () => {
  return (
    <Form className="mega-inline">
      <Row>
        {inlineStyleFormData.map((data, index) => (
          <Col sm={6} key={index}>
            <Card>
              <Media className="p-20">
                <FormGroup check className={`radio radio-${data.className} m-0 w-100`}>
                  <Input id={`InlineStyleForm-${index}`} type="radio" name="radio1"/>
                  <Label className="form-check-label mb-0 w-100" htmlFor={`InlineStyleForm-${index}`}>
                    <Media body>
                      <span className="mt-0 mega-title-badge">
                        {data.deliveryType}
                        <Badge color={data.className} className={`pull-right digits`}>
                          {data.price}
                        </Badge>
                      </span>
                      <span>{data.deliveryText}</span>
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

export default InlineStyleForm