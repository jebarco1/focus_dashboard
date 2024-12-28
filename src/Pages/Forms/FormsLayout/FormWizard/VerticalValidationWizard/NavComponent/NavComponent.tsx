import { Nav, NavItem, NavLink } from 'reactstrap';
import { H3, P } from '../../../../../../AbstractElements';
import { verticalValidationWizardNavData } from '../../../../../../Data/Forms/FormsLayout/FormWizardData';
import { VerticalFormPropsType } from '../../../../../../Types/Forms/FormLayout/FormWizardTypes';

const NavComponent = ({ callbackActive,activeTab }: VerticalFormPropsType) => {
  return (
    <Nav className="flex-column header-vertical-wizard">
      {verticalValidationWizardNavData.map((data, index) => (
        <NavItem key={index}>
            <NavLink
            className={activeTab === index+1 ? "active" : ""}
            onClick={() => {callbackActive(index + 1);}}
            >
                <div className="vertical-wizard">
                    <div className="stroke-icon-wizard">
                        <i className={`fa ${data.iconClassName}`} />
                    </div>
                    <div className="vertical-wizard-content">
                        <H3>{data.tittle}</H3>
                        <P>{data.tittleInforMation}</P>
                    </div>
                </div>
            </NavLink>
        </NavItem>
      ))}
    </Nav>
  )
}

export default NavComponent