import { Col, Input, Label } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { Fragment } from 'react'
import { YourFavoriteSocialMedia } from '../../../../../utils/Constant'
import { favoriteSocialMediaItems } from '../../../../../Data/Forms/FormsControl/CheckBoxAndRadioData'

const FavoriteSocialMedia = () => {
  return (
    <Col sm={6}>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <H6 className="sub-title">{YourFavoriteSocialMedia}</H6>
        {favoriteSocialMediaItems.map((data, index) => (
          <Fragment key={index}>
            <Label className="d-block" htmlFor={`chk-ani-${index}`} />
            <Input className="checkbox_animated" id={`chk-ani-${index}`} type="checkbox" />{data}
          </Fragment>
        ))}
      </div>
    </Col>
  )
}

export default FavoriteSocialMedia