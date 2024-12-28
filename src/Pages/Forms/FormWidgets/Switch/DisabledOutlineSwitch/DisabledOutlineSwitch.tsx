import { Card, Col } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { DisabledOutlineSwitchHeading } from '../../../../../utils/Constant'
import { disabledOutlineSwitchHeaderData } from '../../../../../Data/Forms/FormWidgets/SwitchData'
import DisabledOutlineSwitchCardBody from './DisabledOutlineSwitchCardBody'

const DisabledOutlineSwitch = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={DisabledOutlineSwitchHeading} subTitle={disabledOutlineSwitchHeaderData}/>
        <DisabledOutlineSwitchCardBody />
      </Card>
    </Col>
  )
}

export default DisabledOutlineSwitch