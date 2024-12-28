import { Button, Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { Back, NumberingWizardHeading } from '../../../../../utils/Constant'
import { numberingWizardHeadingData } from '../../../../../Data/Forms/FormsLayout/FormWizardData'
import StepperHorizontal from './StepperHorizontal'
import { ChangeEvent, useState } from 'react'
import ShowError from './CommonError/ShowError'
import BasicInfoForm from './BasicInfoForm/BasicInfoForm'
import CartInfoForm from './CartInfoForm/CartInfoForm'
import FeedbackForm from './FeedbackForm/FeedbackForm'
import FinishForm from './FinishForm/FinishForm'

const NumberingWizard = () => {
  const [level, setLevel] = useState(1);
  const [showFinish, setShowFinish] = useState(false);
  const [basicInputFormValue, setBasicInputFormValue] = useState({email: "",firstName: "",password: "",confirmPassword: "",agreeTerms: false,placeHolderName: "",cardNumber: "",expiration: "",cvvNumber: "",uploadDocumentation: "",informationCheckBox: false,linkedInLink: "",gitHubLink: "",giveFeedBack: "",state: "",agreeConditions: false,});
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = name === "agreeTerms" || name === "informationCheckBox" || name === "agreeConditions" ? event.target.checked : name === "uploadDocumentation" ? event.target.files && event.target.files[0].name: event.target.value;
    setBasicInputFormValue({ ...basicInputFormValue, [name]: value });
  };

  const handleBackButton = () => {
    setShowFinish(false);
    if (level === 2) {setLevel(level - 1);}
    if (level === 3) {setLevel(level - 1);}
    if (level === 4) {setLevel(level - 1);}
  };
  const handleNextButton = () => {
    const { linkedInLink, gitHubLink, giveFeedBack, state, agreeConditions,email, firstName, password, confirmPassword, agreeTerms,placeHolderName,cardNumber,expiration,cvvNumber,uploadDocumentation,informationCheckBox, } =basicInputFormValue;
    if (email !== "" &&firstName !== "" &&password !== "" &&confirmPassword !== "" &&agreeTerms !== false &&level === 1) {
      setLevel(2)
    }else if (placeHolderName !== "" &&cardNumber !== "" &&expiration !== "" &&cvvNumber !== "" &&informationCheckBox !== false &&uploadDocumentation !== "" &&level === 2) {
      setLevel(3);
    }else if (linkedInLink !== "" &&gitHubLink !== "" &&giveFeedBack !== "" &&state !== "" &&agreeConditions !== false &&level === 3) {
      setLevel(4);
      setShowFinish(true);
    }
    else{ShowError()}
  }   
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonHeader title={NumberingWizardHeading} subTitle={numberingWizardHeadingData} headClass='pb-0'/>
        <CardBody className="basic-wizard important-validation">
          <StepperHorizontal level={level} />
          <div id="msform">
            {level === 1 && (<BasicInfoForm getUserData={getUserData} basicInputFormValue={basicInputFormValue}/>)}
            {level === 2 && (<CartInfoForm getUserData={getUserData} basicInputFormValue={basicInputFormValue}/>)}
            {level === 3 && (<FeedbackForm getUserData={getUserData} basicInputFormValue={basicInputFormValue}/>)}
            {level === 4 && <FinishForm />}
          </div>
          <div className="wizard-footer d-flex gap-2 justify-content-end">
            {level > 1 && ( <Button className="alert-light-primary" color="transparent" onClick={handleBackButton}>{Back}</Button>)}
            <Button disabled={showFinish ? true : false} color="primary" onClick={handleNextButton}>{showFinish ? "Finish" : "Next"}</Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default NumberingWizard