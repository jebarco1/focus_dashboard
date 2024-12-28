import { Card, Col, Table } from 'reactstrap'
import CommonHeader from '../../../../Common/CommonHeader'
import HoverableRowsTableHead from './HoverableRowsTableHead'
import HoverableRowsTableBody from './HoverableRowsTableBody'

const HoverableRowsClass = () => {
  return (

 
    <Col sm={12}>
      <Card>
        <div className="StatisticTitle"><CommonHeader  title="Lottery Statistics - Regular Numbers" />Updated: 12/29/2024 15:11:00</div>
        <div className="table-responsive lotterStaticsTable">
          <Table hover={true} className="table-border-horizontal">
            <HoverableRowsTableHead />
            <HoverableRowsTableBody />
          </Table>
        </div>
      </Card>

      <Card>
        <div className="StatisticTitle"><CommonHeader  title="Lottery Statistics - PowerBall Numbers" />Updated: 12/29/2024 15:11:00</div>
        <div className="table-responsive lotterStaticsTable">
          <Table hover={true} className="table-border-horizontal">
            <HoverableRowsTableHead />
            <HoverableRowsTableBody />
          </Table>
        </div>
      </Card>
    </Col>

    
  )
}

export default HoverableRowsClass