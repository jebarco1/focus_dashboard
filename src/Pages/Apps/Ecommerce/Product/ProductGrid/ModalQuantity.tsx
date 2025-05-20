import { ChangeEvent } from 'react'
import { ModalQuantityProp } from '../../../../../Type/Apps/Ecommerce/ProductType';
import { H3 } from '../../../../../AbstractElements';
import { Button, Input, InputGroup } from 'reactstrap';
import { Quantity } from '../../../../../utils/Constant';

const ModalQuantity = ({ quantity, setQuantity }: ModalQuantityProp) => {
  const minusQty = () => quantity > 1 && setQuantity(quantity - 1);
  const plusQty = () => quantity >= 1 && setQuantity(quantity + 1);
  const changeQty = (e: ChangeEvent<HTMLInputElement>) => setQuantity(parseInt(e.target.value));

  return (
    <>
      <H3 className="f-w-600 mb-2">{Quantity}</H3>
      <fieldset className="border-0">
        <InputGroup className="bootstrap-touchspin w-50">
          <Button className="bootstrap-touchspin-down" onClick={minusQty}>
            <i className="fa fa-minus text-white"></i>
          </Button>
          <Input className="touchspin text-center" type="text" name="quantity" value={quantity} onChange={(e) => changeQty(e)} />
          <Button className="bootstrap-touchspin-up" onClick={plusQty}>
            <i className="fa fa-plus text-white"></i>
          </Button>
        </InputGroup>
        <br />
      </fieldset>
    </>
  )
}

export default ModalQuantity