import { Card, Col, Table } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import AddProjectsAndUploadTableBody from './AddProjectsAndUploadTableBody'
import { AddprojectAndUpload, Date, Price, ProjectName, Status } from '../../../../../utils/Constant'

const AddProjectsAndUpload = () => {
  return (
    <Col md={12}>
      <Card>
        <CommonHeader title={AddprojectAndUpload} headClass="card-title mb-0 pb-0" />
        <div className="table-responsive">
          <Table className="card-table table-vcenter text-nowrap">
            <thead>
              <tr>
                <th>{ProjectName}</th>
                <th>{Date}</th>
                <th>{Status}</th>
                <th>{Price}</th>
                <th />
              </tr>
            </thead>
            <AddProjectsAndUploadTableBody />
          </Table>
        </div>
      </Card>
    </Col>
  )
}

export default AddProjectsAndUpload