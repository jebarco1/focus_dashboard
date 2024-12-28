import { Button, Modal, ModalFooter, ModalHeader } from 'reactstrap'
import { NewAddressModalPropsTypes } from '../../../../../../../Types/Forms/FormLayout/FormWizardTypes'
import { Information } from '../../../../../../../utils/Constant'
import NewAdressModalBody from './NewAdressModalBody'

const NewAddressModal = ({ toggle, showModal }: NewAddressModalPropsTypes) => {
  return (
    <Modal isOpen={showModal} toggle={toggle}>
      <ModalHeader toggle={toggle}>{Information}</ModalHeader>
      <NewAdressModalBody />
      <ModalFooter>
        <Button color="transparent" onClick={toggle} className="m-0">Close</Button>
        <Button color="primary" onClick={toggle} className="m-0">Save</Button>
      </ModalFooter>
    </Modal>
  )
}

export default NewAddressModal