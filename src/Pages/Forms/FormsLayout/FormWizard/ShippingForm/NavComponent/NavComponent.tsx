import { Nav, NavLink } from 'reactstrap';
import { H3 } from '../../../../../../AbstractElements';
import { shipIngNavFormData } from '../../../../../../Data/Forms/FormsLayout/FormWizardData';
import { Fragment } from 'react';
interface propsType {
    callbackActive: (val: number | undefined) => void;
    activeTab: number | undefined;
}
const NavComponent = ({ callbackActive, activeTab }: propsType) => {
    const handleTab = (id: number | undefined) => {
        if (id !== undefined) {
          callbackActive(id);
        }
    };
  return (
    <Nav className="nav-pills horizontal-options shipping-options">
      {shipIngNavFormData.map((data, index) => (
        <Fragment key={index}>
          <NavLink
            className={` b-r-0 ${activeTab === index + 1 ? "active" : ""}`}
            onClick={() => handleTab(data.activeTab)}
          >
            <div className="cart-options">
              <div className="stroke-icon-wizard">
                <i className={`fa ${data.iconClassName}`} />
              </div>
              <div className="cart-options-content">
                <H3>{data.tittle}</H3>
              </div>
            </div>
          </NavLink>
        </Fragment>
      ))}
    </Nav>
  )
}

export default NavComponent