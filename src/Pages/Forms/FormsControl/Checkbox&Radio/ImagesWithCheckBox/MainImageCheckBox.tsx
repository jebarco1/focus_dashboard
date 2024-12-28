import { Col, Input, Label, Row } from 'reactstrap'
import { H6, Image } from '../../../../../AbstractElements'
import { imagesWithData } from '../../../../../Data/Forms/FormsControl/CheckBoxAndRadioData'
import { dynamicImage } from '../../../../../Service'

const MainImageCheckBox = () => {
  return (
    <Row className="g-3">
      {imagesWithData.map((data, index) => (
        <Col xxl={3} sm={6}  key={index}>
          <div className="card-wrapper border rounded-3 checkbox-checked">
            <H6 className="sub-title">{data.tittle}</H6>
            <div className="img-checkbox">
              <Input className="main-img-cover form-check-input" id={`img-check-${index}`} type="checkbox" defaultChecked={data?.defaultChecked ? true : false} disabled={data?.disabled ? true : false}/>
              <Label className="form-check-label mb-0" htmlFor={`img-check-${index}`}>
                <Image width={220} height={220} src={dynamicImage(`switch/${index + 1}.jpg`)} alt="coffee-beans"/>
              </Label>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default MainImageCheckBox