import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ClipBoardHeading, FormWidgetsHeading } from '../../../../utils/Constant'
import ClipboardOnTextInput from './ClipboardOnTextInput/ClipboardOnTextInput'
import ClipboardOnTextArea from './ClipboardOnTextArea/ClipboardOnTextArea'
import ClipboardOnParagraph from './ClipboardOnParagraph/ClipboardOnParagraph'
import CopyPortionFromParagraph from './CopyPortionFromParagraph/CopyPortionFromParagraph'

const Clipboard = () => {
  return (
    <>
      <Breadcrumbs
        mainTitle={ClipBoardHeading}
        parent={FormWidgetsHeading}
        title={ClipBoardHeading}
      />
      <Container fluid>
        <Row>
          <ClipboardOnTextInput/>
          <ClipboardOnTextArea/>
          <ClipboardOnParagraph/>
          <CopyPortionFromParagraph/>
        </Row>
      </Container>

    </>
  )
}

export default Clipboard