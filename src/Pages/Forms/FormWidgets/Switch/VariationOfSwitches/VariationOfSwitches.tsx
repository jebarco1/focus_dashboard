import { Card, Col } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { VariationOfSwitchesHeading } from '../../../../../utils/Constant'
import { variationOfSwitchHeaderData } from '../../../../../Data/Forms/FormWidgets/SwitchData'
import VariationOfSwitchesCardBody from './VariationOfSwitchesCardBody'

const VariationOfSwitches = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={VariationOfSwitchesHeading} subTitle={variationOfSwitchHeaderData}/>
        <VariationOfSwitchesCardBody />
      </Card>
    </Col>
  )
}

export default VariationOfSwitches