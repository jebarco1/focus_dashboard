import { Col, FormGroup, Input, Label } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { RadiosWithCreativeOptionsSVGIcons } from '../../../../../utils/Constant'
import { radioOptionsWithCreativeOptionsData } from '../../../../../Data/Forms/FormsControl/MegaOptionData'
import SVG from '../../../../../utils/CommonSvgIcon/SVG'

const RadiosWithCreativeOptions = () => {
  return (
    <Col xl={4}>
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <H6 className="sub-title">{RadiosWithCreativeOptionsSVGIcons}</H6>
        {radioOptionsWithCreativeOptionsData.map((data, index) => (
          <div className="payment-wrapper" key={index}>
            <div className="payment-first">
              <FormGroup check className="form-check radio radio-primary">
                <Input id={`CreativeOptions-${index}`} type="radio" name="radio2"
                defaultChecked={index === 2 ? true : false}/>
                <Label className="form-check-label mb-0" htmlFor={`CreativeOptions-${index}`}>{data.options}</Label>
              </FormGroup>
            </div>
            <div className="payment-second">
                <SVG iconId={data.svgName} className={`mega-icons stroke-${data.strokeClassName}`} />
            </div>
          </div>
        ))}
      </div>
    </Col>
  )
}

export default RadiosWithCreativeOptions