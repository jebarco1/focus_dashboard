//@ts-nocheck
import { ChangeEvent, useState } from 'react'
import ShowError from '../../NumberingWizard/CommonError/ShowError';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { AgreeToTermsAndConditions, Finish, NetBanking, SelectYourBank } from '../../../../../../utils/Constant';
import FeatherIcons from '../../../../../../utils/CommonSvgIcon/FeatherIcons';
import { H6 } from '../../../../../../AbstractElements';
import { netBankingFormBankList } from '../../../../../../Data/Forms/FormsLayout/FormWizardData';
import { toast } from "react-toastify";

const NetBankingForm = () => {
  const [netBankingFormValues, setNetBankingForm] = useState({bankName: "",feedBack: "",});
  const { bankName, feedBack } = netBankingFormValues;
  const [open, setOpen] = useState("");
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = event.target.value;
    setNetBankingForm({ ...netBankingFormValues, [name]: value });
  };

  const handleNextButton = () => {
    if (bankName !== "" && feedBack !== "") {
      toast.info("Form successfully submitted");
    } else {
      ShowError();
    }
  };
  const toggle = (id: string) => {
    open === id ? setOpen("") : setOpen(id);
  };
  return (
    <Form onSubmit={(event) => event.preventDefault()} className="row g-3 mb-3 needs-validation" noValidate>
      <Col md={12}>
        <Accordion open={open} toggle={toggle} className="dark-accordion">
          <AccordionItem>
            <AccordionHeader targetId="1">{NetBanking}
              <FeatherIcons iconName={open === "1" ? "ChevronUp" : "ChevronDown"} className="svg-color"/>
            </AccordionHeader>
            <AccordionBody accordionId="1" className="weight-title card-wrapper">
              <H6 className="sub-title f-14">{SelectYourBank}</H6>
              <Row className="choose-bank">
                {netBankingFormBankList.map((data, index) => (
                  <Col sm={6} key={index}>
                    {data.bankList.map((bankNames, i) => (
                      <FormGroup check key={i} className="radio radio-primary">
                        <Input id={bankNames} type="radio" name="bankName" onChange={getUserData} checked={bankNames === bankName} value={bankNames}/>
                        <Label check className="form-check-label" htmlFor={bankNames}>{bankNames}</Label>
                      </FormGroup>
                    ))}
                  </Col>
                ))}
              </Row>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </Col>
      <Col xs={12}>
        <Input type="textarea" name="feedBack" value={feedBack} onChange={getUserData} placeholder="Your Feedback"/>
      </Col>
      <Col xs={12}>
        <FormGroup className="mb-0">
          <Input id="invalidCheck67" type="checkbox" required/>
          <Label className="form-check-label mb-0" htmlFor="invalidCheck67">{AgreeToTermsAndConditions}</Label>
        </FormGroup>
      </Col>
      <Col xs={12} className="text-end">
        <Button color="success" onClick={handleNextButton}>{Finish}</Button>
      </Col>
    </Form>
  )
}

export default NetBankingForm