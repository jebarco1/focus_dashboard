import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '../../../../Common/CommonHeader'
import { Datatableorderhistory } from '../../../../utils/Constant'
import DataTable from 'react-data-table-component'
import { orderHistoryTableData, orderHistoryTableColumnsData } from '../../../../Data/Apps/Ecommerce/OrderHistoryData'

const DatatableOrderHistory = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonHeader title={Datatableorderhistory}/>
        <CardBody>
            <div className='order-history table-responsive'>
                <DataTable
                    data={orderHistoryTableData} 
                    columns={orderHistoryTableColumnsData}
                    className="display dataTable no-footer"
                    dense={true}
                    pagination
                    paginationServer
                />
            </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DatatableOrderHistory