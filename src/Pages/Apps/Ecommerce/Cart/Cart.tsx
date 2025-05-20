import { Card, CardBody, Col, Container } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Carts, Ecommerce } from '../../../../utils/Constant'
import CommonHeader from '../../../../Common/CommonHeader'
import CartData from './CartData'

const Cart = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Carts} parent={Ecommerce} title={Carts} />
      <Container fluid>
        <Col sm="12">
          <Card>
            <CommonHeader title={Carts} />
            <CardBody>
              <CartData />
            </CardBody>
          </Card>
        </Col>
      </Container>
    </>
  )
}

export default Cart