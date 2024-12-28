import { Input } from 'reactstrap'
import { LI, UL } from '../../../../../AbstractElements'
import { variationBoxData } from '../../../../../Data/Forms/FormsLayout/FormWizardData'

const VariationBox = () => {
  return (
    <div className="variation-box">
      {variationBoxData.map((data, index) => (
        <div className="selection-box" key={index}>
          <Input type="checkbox" />
          <div className="custom--mega-checkbox">
            <UL className="d-flex flex-column simple-list">
              <LI>{data.tittle}</LI>
              <LI className="txt-primary">{data.details}</LI>
            </UL>
          </div>
        </div>
      ))}
    </div>
  )
}

export default VariationBox