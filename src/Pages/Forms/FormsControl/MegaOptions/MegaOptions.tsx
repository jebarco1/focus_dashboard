import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { FormsControls, MegaOption } from '../../../../utils/Constant'
import VariationRadio from './VariationRadio/VariationRadio'
import VariationCheckBox from './VariationCheckBox/VariationCheckBox'
import DefaultStyle from './DefaultStyle/DefaultStyle'
import WithoutBordersStyle from './WithoutBordersStyle/WithoutBordersStyle'
import SolidBorderStyle from './SolidBorderStyle/SolidBorderStyle'
import OfferStyleBorder from './OfferStyleBorder/OfferStyleBorder'
import InlineStyle from './InlineStyle/InlineStyle'
import VerticalStyle from './VerticalStyle/VerticalStyle'
import HorizontalStyle from './HorizontalStyle/HorizontalStyle'

const MegaOptions = () => {
  return (
    <>
      <Breadcrumbs mainTitle={MegaOption} parent={FormsControls} title={MegaOption}/>
      <Container fluid>
        <Row>
          <VariationRadio/>
          <VariationCheckBox/>
          <DefaultStyle/>
          <WithoutBordersStyle/>
          <SolidBorderStyle/>
          <OfferStyleBorder/>
          <InlineStyle/>
          <VerticalStyle/>
          <HorizontalStyle/>
        </Row>
      </Container>
    </>
  )
}

export default MegaOptions