import { Table } from "reactstrap";
import { useAppSelector } from "../../../../ReaduxToolkit/Hooks";
import { H3 } from "../../../../AbstractElements";
import { getallCardTotal } from "../../../../Service/Ecommerce.service";
import { Total } from "../../../../utils/Constant";
import InvoiceImage from "./InvoiceImage";
import InvoiceData from "./InvoiceData";

const InvoiceBody = () => {
  const { cart } = useAppSelector((state) => state.cartData);
  return (
    <div>
      <div className="table-responsive theme-scrollbar invoice-table" id="table">
        <Table bordered striped>
          <tbody>
            <tr>
              <td className="item">
                <H3 className="p-2 mb-0">{"Item Description"}</H3>
              </td>
              <td className="Hours">
                <H3 className="p-2 mb-0">{"Hours"}</H3>
              </td>
              <td className="Rate">
                <H3 className="p-2 mb-0">{"Rate"}</H3>
              </td>
              <td className="subtotal">
                <H3 className="p-2 mb-0">{"Sub-total"}</H3>
              </td>
            </tr>
            <InvoiceData />
            <tr>
              <td />
              <td />
              <td className="Rate">
                <H3 className="mb-0 p-2">{Total}</H3>
              </td>
              <td className="payment">
                <H3 className="mb-0 p-2">${getallCardTotal(cart)}</H3>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <InvoiceImage />
    </div>
  );
};

export default InvoiceBody;
