import { Button, Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import CopyToClipboard from 'react-copy-to-clipboard'
import { H6, P } from '../../../../../AbstractElements'
import { ClipboardOnParagraphHeading, ClipboardOnParagraphValue, Copy } from '../../../../../utils/Constant'
import { toast } from 'react-toastify'

const ClipboardOnParagraph = () => {
  return (
    <Col sm={12} md={6}>
      <Card className="height-equal">
        <CommonHeader title={ClipboardOnParagraphHeading} headClass='pb-0' />
        <CardBody>
          <div className="clipboaard-container">
            <P className="f-16">{"Copy from paragraph"}</P>
            <CopyToClipboard text={ClipboardOnParagraphValue} onCopy={() => toast.info("text successfully copied")}>
              <H6 className="border rounded card-body f-w-300">{ClipboardOnParagraphValue}</H6>
            </CopyToClipboard>
            <div className="mt-3 text-end">
              <CopyToClipboard text={ClipboardOnParagraphValue} onCopy={() => toast.info("text successfully copied")}>
                <Button className="btn-clipboard" color="info">
                  <i className="fa fa-copy"></i> {Copy}
                </Button>
              </CopyToClipboard>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ClipboardOnParagraph