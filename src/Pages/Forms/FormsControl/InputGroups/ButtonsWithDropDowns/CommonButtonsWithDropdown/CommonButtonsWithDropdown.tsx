import { Fragment, useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { DropdownHeading } from '../../../../../../utils/Constant';
import { InputGroupButtonTypes } from '../../../../../../Data/Forms/FormsControl/InputGroupData';
type PropsType = {
    dropdownItems: InputGroupButtonTypes[];
    toggleColor : string
}
const CommonButtonsWithDropdown = ({dropdownItems,toggleColor}: PropsType) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret className={`btn-outline-${toggleColor}`} color="transparent">{DropdownHeading}</DropdownToggle>
      <DropdownMenu className="dropdown-block">
        {dropdownItems.map((data, index) => (
          <Fragment key={index}>
            {data.name ? (
              <DropdownItem>{data.name}</DropdownItem>
            ) : (
              <DropdownItem divider />
            )}
          </Fragment>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default CommonButtonsWithDropdown