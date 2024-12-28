import { useState } from 'react';
import { ModalTwoPropsType } from '../../../../../Types/Forms/FormLayout/FormWizardTypes'
import { Button, Form, Input, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { H3, Image, P } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Service';
import { ScanQRcode, Submit } from '../../../../../utils/Constant';

const ModalTwo = ({ modalTwo, toggleTwo }: ModalTwoPropsType) => {
  const [active, setActive] = useState<boolean>(true);
  return (
    <Modal centered isOpen={modalTwo} toggle={toggleTwo}>
      <ModalHeader toggle={toggleTwo}><H3>{ScanQRcode}</H3></ModalHeader>
      <ModalBody className="main-qr-code">
        <div className="modal-toggle-wrapper">
          <P>{"Scan the QR code using an authenticator app and website such as abc authenticator, OTP xyz, or pqr authenticator. You must input the six-digit code it generates below."}</P>
          <div className="modal-img">
            <div className="qr-img">
              <Image width={100} height={100} src={dynamicImage("forms/qr-code.png")} alt="qr-code"/>
            </div>
            <div className="qr-content">
              <div className={`alert alert-light-dark light alert-dismissible fade text-dark border-left-wrapper ${ active ? "show" : "d-none"}`} role="alert">
                <i className="fa fa-exclamation-triangle" />
                <div>
                  <span>{"If your qr code is not working then enter this code in your input field."}</span>
                  <span className="f-w-500">
                    TYU78DE29OLAAWCVNTYFGESWQ31098QW
                  </span>
                </div>
                <Button close onClick={() => {setActive(false)}}/>
              </div>
            </div>
          </div>
          <Form onSubmit={(event) => event.preventDefault()} className="needs-validation" noValidate>
            <Input type="text" required placeholder="Enter QR Code" />
          </Form>
          <Button color="primary">{Submit}</Button>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default ModalTwo