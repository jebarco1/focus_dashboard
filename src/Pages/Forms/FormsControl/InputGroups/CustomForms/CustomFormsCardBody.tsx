import { Button, CardBody, Input, InputGroup, Label } from 'reactstrap'
import { Submit } from '../../../../../utils/Constant'

const CustomFormsCardBody = () => {
  return (
    <CardBody className="common-flex main-custom-form">
      <InputGroup>
        <Label className="input-group-text">{'Options'}</Label>
        <Input type="select" defaultValue={"Select Your Favorite Pixelstrap Theme"}>
          <option>{'Select Your Favorite Pixelstrap Theme'}</option>
          <option>{'Tivo'}</option>
          <option>{'Cion'}</option>
          <option>{'Roxo'}</option>
        </Input>
      </InputGroup>
      <InputGroup>
        <Input type="select" defaultValue={"Select Your Favorite Colors"}>
          <option>{'Select Your Favorite Colors'}</option>
          <option>{'Yellow'}</option>
          <option>{'Red'}</option>
          <option>{'Orange'}</option>
        </Input>
        <Label className="input-group-text" htmlFor="inputGroupSelect02">{'Options'}</Label>
      </InputGroup>
      <InputGroup>
        <Button outline color="secondary" >
            <i className="icofont icofont-credit-card" />
        </Button>
        <Input type="select" defaultValue={"Select Your Favorite Chocolates"}>
          <option>{'Select Your Favorite Chocolates'}</option>
          <option>{'Dark Chocolates'}</option>
          <option>{'Dairy Milk'}</option>
          <option>{'Kitkat'}</option>
        </Input>
      </InputGroup>
      <InputGroup>
        <Input type="select" defaultValue={"Select Your Favorite Theme"}>
          <option>{'Select Your Favorite Theme'}</option>
          <option>{'Oslo'}</option>
          <option>{'Koho'}</option>
          <option>{'Voxo'}</option>
        </Input>
        <Button outline color="secondary">{Submit}</Button>
      </InputGroup>
    </CardBody>
  )
}

export default CustomFormsCardBody