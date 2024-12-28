import { Card, Col, Table } from 'reactstrap'
import CommonHeader from '../../../../Common/CommonHeader'
import { HoverableRowsWithHorizontalBorder } from '../../../../utils/Constant'
import { hoverableRowsBorderSpan } from '../../../../Data/Tables/ReactStrapTablesData/ReactStrapTablesData'
import HoverableRowsTableHead from './HistoricalNumberTableHead'
import HoverableRowsTableBody from './HistoricalNumberTableBody'

const HoverableRowsClass = () => {
  return (

 
    <Col sm={12}>
      <Card>
        <div className="StatisticTitle"><CommonHeader  title="Number Statistics - 14 " />Updated: 12/29/2024 15:11:00</div>
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