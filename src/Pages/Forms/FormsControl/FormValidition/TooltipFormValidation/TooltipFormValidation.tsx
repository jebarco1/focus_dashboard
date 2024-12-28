import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { TooltipFormValidationHeading } from '../../../../../utils/Constant'
import TooltipFormValidationForm from './TooltipFormValidationForm'

const TooltipFormValidation = () => {
    const subTitle =[ {
        text: "If your form layout allows it, you can swap the",
        code: `.{'valid|invalid'}`,
      },
      {
        text: "-feedback classes for",
        code: `.{'valid|invalid'}`,
      },
      {
        text: "-tooltip classes to display validation feedback in a styled tooltip. Be sure to have a parent with",
        code: "position: relative",
      },
      { text: "on it for tooltip positioning." },
    ]
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={TooltipFormValidationHeading} subTitle={subTitle} headClass='pb-0'/>
        <CardBody>
          <TooltipFormValidationForm />
        </CardBody>
      </Card>
    </Col>
  )
}

export default TooltipFormValidation