import { Nav, NavItem, NavLink } from 'reactstrap';
import { BusinessFormCommonProps } from '../../../../../../Types/Forms/FormLayout/FormWizardTypes';
import { customHorizontalWizardNavData } from '../../../../../../Data/Forms/FormsLayout/FormWizardData';
import { H3 } from '../../../../../../AbstractElements';

const NavComponent = ({callbackActive,activeTab,}: BusinessFormCommonProps) => {
    const handleTab = (id: number | undefined) => {
      if (id !== undefined) {
        callbackActive(id);
      }
    };
  return (
    <Nav className="nav-pills horizontal-options shipping-options">
      {customHorizontalWizardNavData.map((data, index) => (
        <NavItem key={index}>
          <NavLink
            className={`b-r-0 ${activeTab === index + 1 ? "active" : ""}`}
            onClick={() => handleTab(data.activeTab)}
          >
            <div className="horizontal-wizard">
              <div className="stroke-icon-wizard">
                <i className={`fa ${data.iconName}`} />
              </div>
              <div className="horizontal-wizard-content">
                <H3>{data.tittle}</H3>
              </div>
            </div>
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  )
}

export default NavComponent