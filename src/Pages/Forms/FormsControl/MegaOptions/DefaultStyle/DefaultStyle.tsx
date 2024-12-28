import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { DefaultStyleHeading } from '../../../../../utils/Constant'
import CommonCardFooter from '../../../../../CommonElements/Footer/CommonCardFooter'
import DefaultStyleForm from './DefaultStyleForm'

const DefaultStyle = () => {
    const subTitle = [
        {
          text: "This option is show by default you don't need to add any extra class.",
        }
    ]
  return (
    <Col sm={12} xxl={6} className="box-col-6">
      <Card>
        <CommonHeader title={DefaultStyleHeading} subTitle={subTitle} headClass='pb-0'/>
        <CardBody className="megaoptions-border-space-sm">
          <DefaultStyleForm />
        </CardBody>
        <CommonCardFooter />
      </Card>
    </Col>
  )
}

export default DefaultStyle