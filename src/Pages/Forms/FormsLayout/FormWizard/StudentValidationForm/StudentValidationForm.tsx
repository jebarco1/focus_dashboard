import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import StudentValidationFormCardBody from './StudentValidationFormCardBody/StudentValidationFormCardBody'
import { StudentValidationFormHeading } from '../../../../../utils/Constant'
import { studentValidationFormHeadingData } from '../../../../../Data/Forms/FormsLayout/FormWizardData'

const StudentValidationForm = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonHeader title={StudentValidationFormHeading} subTitle={studentValidationFormHeadingData} headClass='pb-0'/>
        <CardBody className="custom-input">
          <StudentValidationFormCardBody />
        </CardBody>
      </Card>
    </Col>
  )
}

export default StudentValidationForm