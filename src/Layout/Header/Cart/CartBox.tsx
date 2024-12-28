import { Button, Input, InputGroup } from 'reactstrap'
import { H6, Image, LI, UL } from '../../../AbstractElements'
import { cartsData } from '../../../Data/Layout/Header/CartData'
import { dynamicImage } from '../../../Service'
import { Link } from 'react-router-dom'
import { Href } from '../../../utils/Constant'
import FeatherIcons from '../../../utils/CommonSvgIcon/FeatherIcons'
import CartTotal from './CartTotal'

const CartBox = () => {
  return (
    <UL>
        {cartsData.map((data,index)=>(
            <LI key={index}>
            <div className="d-flex">
                <Image className="img-fluid b-r-5 img-60" src={dynamicImage(`ecommerce/${data.image}`)} alt="" />
                <div className="flex-grow-1">
                    <span>{data.userName}</span>
                    <div className="qty-box">
                        <InputGroup>
                            <span className="input-group-prepend">
                                <Button className="quantity-left-minus"> - </Button>
                            </span>
                            <Input className="input-number" type="text" name="quantity" defaultValue="1"/>
                            <span className="input-group-prepend">
                                <Button className="quantity-right-plus"> + </Button>
                            </span>
                        </InputGroup>
                    </div>
                    <H6 className="font-primary">${data.amount}</H6>
                </div>
                <div className="close-circle">
                    <Link className="bg-danger" to={Href}>
                        <FeatherIcons iconName="X" />
                    </Link>
                </div>
            </div>
        </LI>
        ))}
        <CartTotal />
    </UL>
  )
}

export default CartBox