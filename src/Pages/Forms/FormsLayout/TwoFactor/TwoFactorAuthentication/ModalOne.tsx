import { ChangeEvent, useState } from 'react';
import { Button, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { ModalOnePropsType } from '../../../../../Types/Forms/FormLayout/FormWizardTypes';
import ShowError from '../../FormWizard/NumberingWizard/CommonError/ShowError';
import { modalOneData } from '../../../../../Data/Forms/FormsLayout/FormWizardData';
import { H3, LI, P, UL } from '../../../../../AbstractElements';
import { Cancel, Next, TwoFactorAuthenticationHeading } from '../../../../../utils/Constant';
import ModalTwo from './ModalTwo';

const ModalOne = ({ toggle, modalOne }: ModalOnePropsType) => {
  const [selectAuthenticatorMethodName, setSelectAuthenticatorMethodName] = useState("");
  const [modalTwo, setModalTwo] = useState(false);
  const toggleTwo = () => setModalTwo(!modalTwo);
  const getValue = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setSelectAuthenticatorMethodName(value);
  };
  const handleNextButton = () => {
    if (selectAuthenticatorMethodName !== "") {
      toggleTwo();
      toggle();
    } else {
      ShowError();
    }
  };
  return (
    <>
      <Modal centered isOpen={modalOne} toggle={toggle}>
        <ModalHeader toggle={toggle}><H3>{TwoFactorAuthenticationHeading}</H3></ModalHeader>
        <ModalBody>
          <div className="modal-toggle-wrapper">
            <P>{"To log into your account, youll also need to enter your username, password, and a code that was sent to you through SMS or an app."}</P>
            <div className="authentication-options">
              <FormGroup check className="radio radio-primary ps-0">
                <UL className="radio-wrapper">
                  {modalOneData.map((data, index) => (
                    <LI key={index}>
                      <Input onChange={getValue}  id={data.tittle} type="radio" name="selectAuthenticatorMethodName" checked={selectAuthenticatorMethodName === data.tittle} value={data.tittle}/>
                      <Label className="form-check-label mb-0" htmlFor={data.tittle}>
                        <i className={`fa ${data.iconClassName}`} />
                        <span className="d-flex flex-column"><span>{data.tittle}</span><span>{data.description}</span></span>
                      </Label>
                    </LI>
                  ))}
                </UL>
              </FormGroup>
            </div>
            <Button color="dark" className="rounded-pill w-100 mt-3" onClick={handleNextButton}>{Next}</Button>
            <Button color="transparent" className="rounded-pill w-100 pb-0 dark-toggle-btn" onClick={toggle}>{Cancel}</Button>
          </div>
        </ModalBody>
      </Modal>
      <ModalTwo modalTwo={modalTwo} toggleTwo={toggleTwo} />
    </>
  )
}

export default ModalOne