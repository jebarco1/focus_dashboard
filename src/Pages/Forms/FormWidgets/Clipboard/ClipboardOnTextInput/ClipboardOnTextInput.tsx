import { useState } from 'react'
import { Button, Card, CardBody, Col, Input } from 'reactstrap';
import CommonHeader from '../../../../../Common/CommonHeader';
import { P } from '../../../../../AbstractElements';
import { ClipBoardOnTextInputHeading, Copy, Cut } from '../../../../../utils/Constant';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

const ClipboardOnTextInput = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <Col sm={12} md={6}>
      <Card>
        <CommonHeader title={ClipBoardOnTextInputHeading} headClass='pb-0' />
        <CardBody>
          <div className="clipboaard-container">
            <P className="f-16">{"Cut/copy from textarea"}</P>
            <Input type="text" placeholder="type some text to copy / cut" value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
            <div className="mt-3 text-end">
              <CopyToClipboard text={inputValue} onCopy={() => toast.info("text successfully copied")}>
                <Button className="btn-clipboard me-2" color="primary">
                    <i className="fa fa-copy"></i> {Copy}
                </Button>
              </CopyToClipboard>
              <CopyToClipboard text={inputValue} onCopy={() => { toast.info("text successfully cut"); setInputValue("");}}>
                <Button className="btn-clipboard-cut" color="secondary">
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

export default ClipboardOnTextInput