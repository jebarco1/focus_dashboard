import { Badge, Card, Col, FormGroup, Input, Label, Media } from 'reactstrap'
import { P } from '../../../../../AbstractElements'
import { BuyingOptionHeading, StartRatingHeading } from '../../../../../utils/Constant'
import { buyingOptionsData } from '../../../../../Data/Forms/FormsControl/MegaOptionData'

const BuyingOption = () => {
  return (
    <>
      <Col sm={12}>
        <P className="mega-title m-b-5">{BuyingOptionHeading}</P>
      </Col>
        {buyingOptionsData.map((data, index) => (
          <Col sm={6} key={index}>
            <Card className="mb-0">
              <Media className="p-20">
                <FormGroup check className={`radio radio-${data.className} m-0 w-100`}>
                  <Input id={`buyingOptions-${index}`} type="radio" name="radio7"/>
                  <Label className="form-check-label mb-0 w-100" htmlFor={`buyingOptions-${index}`}>
                    <Media body>
                      <span className="mt-0 mega-title-badge">{data.tittle}
                        <Badge color={data.className} className={`pull-right digits`}>{data.price}</Badge>
                      </span>
                      <span className="rating-star-wrapper">
                        {data.starRating.map((star, index) => (<i key={index} className={`icofont icofont-star ${star}`}/>))}
                        {data.totalRating}{StartRatingHeading}
                      </span>
                    </Media>
                  </Label>
                </FormGroup>
              </Media>
            </Card>
          </Col>
        ))}
    </>
  )
}

export default BuyingOption