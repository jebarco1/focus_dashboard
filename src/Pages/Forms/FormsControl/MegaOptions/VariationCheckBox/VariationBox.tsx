import { Input } from 'reactstrap'
import { LI, UL } from '../../../../../AbstractElements'
import { selectRequirementsData } from '../../../../../Data/Forms/FormsControl/MegaOptionData'
import { Sales } from '../../../../../utils/Constant'

const VariationBox = () => {
  return (
    <div className="variation-box">
      {selectRequirementsData.map((data, index) => (
        <div className="selection-box" key={index}>
          <Input type="checkbox" defaultChecked={data.defaultChecked ? true : false}/>
          <div className="custom--mega-checkbox">
            <UL className="d-flex flex-column simple-list">
              <LI>{data.themeName}</LI>
              <LI className="txt-primary">{data.sale} {Sales}</LI>
            </UL>
          </div>
        </div>
      ))}
    </div>
  )
}

export default VariationBox