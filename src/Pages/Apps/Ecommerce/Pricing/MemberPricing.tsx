import { Button, Col } from 'reactstrap'
import { pricingData } from '../../../../Data/Apps/Ecommerce/PricingData'
import { Href, SignUp } from '../../../../utils/Constant'
import { H3, LI, UL } from '../../../../AbstractElements'

const MemberPricing = () => {
  return (
    <>
    {pricingData.map((data,index)=>(
        <Col lg="3" sm="6" className="box-col-3" key={index}>
            <div className="pricingtable">
                <div className="pricingtable-header">
                    <H3 className="title">{data.title}</H3>
                </div>
                <div className="price-value">
                    <span className="currency">$</span>
                    <span className="amount">{data.amount}</span>
                    <span className="duration">/mo</span>
                </div>
                <UL className="pricing-content simple-list">
                    {data.content.map((item,index)=>(
                        <LI key={index}>{item.detail}</LI>
                    ))}
                </UL>
                <div className="pricingtable-signup">
                    <Button color="primary" size="lg" href={Href}>{SignUp}</Button>
                </div>
            </div>
        </Col>
    ))}
        
    </>
  )
}

export default MemberPricing