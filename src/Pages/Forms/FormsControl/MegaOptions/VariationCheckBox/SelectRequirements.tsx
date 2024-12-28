import { Col } from 'reactstrap'
import { ItIsTimeTo, Upgrade } from '../../../../../utils/Constant'
import { H5, P } from '../../../../../AbstractElements'
import VariationBox from './VariationBox'

const SelectRequirements = () => {
  return (
    <Col xl={8} md={7}>
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <section className="main-upgrade">
          <div>
            <i className="fa fa-rocket" />
            <H5 className="mb-2">{ItIsTimeTo} 
              <span className="txt-primary">{Upgrade}</span>
            </H5>
            <P className="text-muted mb-2">{"Select the theme that best suits your requirements, and you're ready to go!"}</P>
          </div>
          <VariationBox/>
        </section>
      </div>
    </Col>
  )
}

export default SelectRequirements