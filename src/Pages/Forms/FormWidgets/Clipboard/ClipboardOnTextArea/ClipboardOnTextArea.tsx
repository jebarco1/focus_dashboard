import { useState } from 'react'
import { Button, Card, CardBody, Col, Input } from 'reactstrap';
import CommonHeader from '../../../../../Common/CommonHeader';
import { ClipBoardOnTextArea, ClipboardOnTextAreaValue, Copy, Cut } from '../../../../../utils/Constant';
import { P } from '../../../../../AbstractElements';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

const ClipboardOnTextArea = () => {
  const [clipBoardOnTextAreaValue, setClipBoardOnTextAreaValue] = useState(ClipboardOnTextAreaValue);
  return (
    <Col sm={12} md={6}>
      <Card>
        <CommonHeader title={ClipBoardOnTextArea} headClass='pb-0'/>
        <CardBody>
          <div className="clipboaard-container">
            <P className="f-16">{"Cut/copy from textarea"}</P>
            <Input type="textarea" onChange={(event) => setClipBoardOnTextAreaValue(event.target.value)} className="f-14" rows={3} value={clipBoardOnTextAreaValue}/>
            <div className="mt-3 text-end">
              <CopyToClipboard text={clipBoardOnTextAreaValue} onCopy={() => toast.info("text successfully copied")}>
                <Button className="btn-clipboard me-2" color="warning">
                  <i className="fa fa-copy"></i> {Copy}
                </Button>
              </CopyToClipboard>
              <CopyToClipboard text={clipBoardOnTextAreaValue} onCopy={() => { toast.info("text successfully cut"); setClipBoardOnTextAreaValue("");}}>
                <Button className="btn-clipboard-cut" color="success">
                  <i className="fa fa-cut"></i> {Cut}
                </Button>
              </CopyToClipboard>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ClipboardOnTextArea