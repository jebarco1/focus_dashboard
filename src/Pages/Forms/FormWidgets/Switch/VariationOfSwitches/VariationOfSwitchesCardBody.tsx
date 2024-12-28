import { CardBody } from 'reactstrap'
import { UL } from '../../../../../AbstractElements'
import SkewedSwitch from './SkewedSwitch'
import FlipSwitch from './FlipSwitch'
import DifferentSwitches from './DifferentSwitches'

const VariationOfSwitchesCardBody = () => {
  return (
    <CardBody className="switch-wrapper">
      <UL className="tg-list common-flex simple-list flex-row">
        <SkewedSwitch />
        <FlipSwitch />
        <DifferentSwitches />
      </UL>
    </CardBody>
  )
}

export default VariationOfSwitchesCardBody