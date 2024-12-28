import { Card, Col } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { ButtonAddonsHeading } from '../../../../../utils/Constant'
import ButtonAddonsCardBody from './ButtonAddonsCardBody'

const ButtonAddons = () => {
    const subTitle = [
        {
            text: "Multiple add-ons are supported and can be mixed with buttons input versions.",
        },
    ]
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={ButtonAddonsHeading} subTitle={subTitle} headClass='pb-0'/>
        <ButtonAddonsCardBody />
      </Card>
    </Col>  
  )
}

export default ButtonAddons