import { Button, Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { CopyHighlighted, CopyParagraph, CopyText, CopyTextParagraph } from '../../../../../utils/Constant'
import { H6, P } from '../../../../../AbstractElements'
import CopyToClipboard from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'

const CopyPortionFromParagraph = () => {
  return (
    <Col sm={12} md={6}>
      <Card className="height-equal">
        <CommonHeader title={CopyParagraph} headClass='pb-0'/>
        <CardBody>
          <div className="clipboaard-container">
            <P className="f-16">{"Copy from paragraph"}</P>
            <H6 className="border rounded card-body f-w-300">
              <span className="bg-primary text-white p-1">{CopyText}</span>
              {CopyTextParagraph}
            </H6>
            <div className="mt-3 text-end">
              <CopyToClipboard text={CopyText} onCopy={() => toast.info("text successfully copied")}>
                <Button className="btn-clipboard" color="secondary">
                    <i className="fa fa-copy"></i> {CopyHighlighted}
                </Button>
              </CopyToClipboard>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CopyPortionFromParagraph