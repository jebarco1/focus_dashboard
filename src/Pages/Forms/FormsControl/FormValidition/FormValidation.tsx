import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { FormsControls, ValidationForms } from '../../../../utils/Constant'
import TooltipFormValidation from './TooltipFormValidation/TooltipFormValidation'
import BrowserDefault from './BrowserDefault/BrowserDefault'
import ValidationForm from './ValidationForm/ValidationForm'

const FormValidation = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ValidationForms} parent={FormsControls} title={ValidationForms}/>
      <Container fluid>
        <Row>
          <TooltipFormValidation />
          <BrowserDefault />
          <ValidationForm/>
        </Row>
      </Container>
    </>
  )
}

export default FormValidation