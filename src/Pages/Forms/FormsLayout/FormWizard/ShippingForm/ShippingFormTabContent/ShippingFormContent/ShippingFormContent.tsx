import { ChangeEvent, useState } from 'react';
import { CommonPropsTypes } from '../../../../../../../Types/Forms/FormLayout/FormWizardTypes'
import ShowError from '../../../NumberingWizard/CommonError/ShowError';
import { H3, P } from '../../../../../../../AbstractElements';
import { Button } from 'reactstrap';
import { SavedAddress, ShippingInformation, ShippingInformationText, ShippingMethod } from '../../../../../../../utils/Constant';
import NewAddressModal from './NewAddressModal';
import HomeAndOfficeAddress from './HomeAndOfficeAddress';
import ShippingMethods from './ShippingMethods';

const ShippingFormContent = ({ callbackActive }: CommonPropsTypes) => {
  const [radioBoxValues, setRadioBoxValues] = useState({address: "",shippingMethod: "",});
  const { address, shippingMethod } = radioBoxValues;
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = event.target.value;
    setRadioBoxValues({ ...radioBoxValues, [name]: value });
  };

  const handleNextButton = () => {
    if (address !== "" && shippingMethod !== "") {
      callbackActive(3);
    } else {
      ShowError();
    }
  };
  const [showModal, setShowModal] = useState(false);
  const toggle = () => setShowModal(!showModal);
  return (
    <>
      <H3>{ShippingInformation}</H3>
      <P className="f-light">{ShippingInformationText}</P>
      <div className="shipping-title shipping-wizard">
        <H3 className="mb-2">{SavedAddress}</H3>
        <Button onClick={toggle} color="primary">
          <i className="fa fa-plus-square f-20" />
        </Button>
        <NewAddressModal showModal={showModal} toggle={toggle} />
      </div>
      <HomeAndOfficeAddress radioBoxValues={radioBoxValues} getUserData={getUserData}/>
      <H3 className="mt-4 mb-2">{ShippingMethod}</H3>
      <ShippingMethods radioBoxValues={radioBoxValues} getUserData={getUserData} handleNextButton={handleNextButton}/>
    </>
  )
}

export default ShippingFormContent