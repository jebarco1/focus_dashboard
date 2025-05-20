import { Label } from 'reactstrap'
import { P } from '../../../../AbstractElements'
import { useAppSelector } from '../../../../ReaduxToolkit/Hooks';

const InvoiceData = () => {
    const { cart } = useAppSelector((state) => state.cartData);
  return (
    <>
        {cart.map((data) => (
            <tr>
                <td>
                    <Label>{data.name}</Label>
                    <P className="m-0">{data.note}</P>
                </td>
                <td>
                    <P className="itemtext">{Math.random().toFixed()}</P>
                </td>
                <td>
                    <P className="itemtext">${data.price}</P>
                </td>
                <td>
                    <P className="itemtext">${data.price * data.total}</P>
                </td>
            </tr>
        ))}
    </>
  )
}

export default InvoiceData