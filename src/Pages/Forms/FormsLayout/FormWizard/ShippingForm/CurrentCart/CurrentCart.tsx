import { Col, Table } from 'reactstrap'
import { H3 } from '../../../../../../AbstractElements'
import { CurrentCartHeading } from '../../../../../../utils/Constant'
import CurrentCartTableHead from './CurrentCartTableHead'
import CurrentCartTableBody from './CurrentCartTableBody'
import CurrentCartTableFooter from './CurrentCartTableFooter'

const CurrentCart = () => {
  return (
    <Col xl={4}>
      <div className="shipping-info">
        <H3>{CurrentCartHeading}</H3>
        <div className="overflow-auto">
          <Table striped>
            <CurrentCartTableHead />
            <CurrentCartTableBody />
            <CurrentCartTableFooter />
          </Table>
        </div>
      </div>
    </Col>
  )
}

export default CurrentCart