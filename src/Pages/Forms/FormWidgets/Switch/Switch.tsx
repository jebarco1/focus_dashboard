import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { FormWidgetsHeading, SwitchHeading } from '../../../../utils/Constant'
import CustomSwitch from './CustomSwitch/CustomSwitch'
import IconsSwitch from './IconsSwitch/IconsSwitch'
import UncheckedSwitch from './UncheckedSwitch/UncheckedSwitch'
import BordersWithIcons from './BordersWithIcons/BordersWithIcons'
import DisabledOutlineSwitch from './DisabledOutlineSwitch/DisabledOutlineSwitch'
import VariationOfSwitches from './VariationOfSwitches/VariationOfSwitches'
import SwitchSizing from './SwitchSizing/SwitchSizing'
import SwitchWithIcons from './SwitchWithIcons/SwitchWithIcons'

const Switch = () => {
  return (
    <>
      <Breadcrumbs mainTitle={SwitchHeading} parent={FormWidgetsHeading} title={SwitchHeading} />
      <Container fluid>
        <Row>
          <CustomSwitch />
          <IconsSwitch />
          <UncheckedSwitch/>
          <BordersWithIcons/>
          <DisabledOutlineSwitch/>
          <VariationOfSwitches/>
          <SwitchSizing/>
          <SwitchWithIcons/>
        </Row>
      </Container>
    </>
  )
}

export default Switch