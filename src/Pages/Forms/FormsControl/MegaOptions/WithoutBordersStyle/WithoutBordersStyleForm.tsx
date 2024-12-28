import { Badge, Card, Col, Form, FormGroup, Input, Label, Media, Row } from 'reactstrap'
import { DollarSign } from '../../../../../utils/Constant'
import { withoutBordersStyleForm } from '../../../../../Data/Forms/FormsControl/MegaOptionData'

const WithoutBordersStyleForm = () => {
  return (
    <Form className="mega-inline plain-style">
      <Row>
        {withoutBordersStyleForm.map((data, index) => (
          <Col sm={6} key={index}>
            <Card>
              <Media className="p-20">
                <FormGroup check className="checkbox checkbox-warning m-0">
                  <Input id={`checkbox${index}`} type="checkbox" defaultChecked={data.defaultChecked?true:false}/>
                  <Label className="form-check-label" htmlFor={`checkbox${index}`}>
                    <Media body className="megaoption-space">
                      <span className="mt-0 mega-title-badge">
                        {DollarSign}{data.price}
                        <Badge color={data.className} className={`pull-right digits`}>{data.badgeText}</Badge>
                      </span>
                      <span>{data.detail}</span>
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

export default WithoutBordersStyleForm