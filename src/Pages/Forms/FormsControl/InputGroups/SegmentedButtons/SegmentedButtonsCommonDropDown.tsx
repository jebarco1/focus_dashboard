import { Fragment, useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { InputGroupButtonTypes } from '../../../../../Data/Forms/FormsControl/InputGroupData';
import { ToggleDropdown } from '../../../../../utils/Constant';
type PropsType = {
    dropdownItems: InputGroupButtonTypes[];
    toggleColor : string
}
const SegmentedButtonsCommonDropDown = ({dropdownItems,toggleColor}:PropsType) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle  className="dropdown-toggle-split dropdown-toggle" color={toggleColor}>
        <span className="visually-hidden">{ToggleDropdown}</span>
      </DropdownToggle>
      <DropdownMenu className="dropdown-block dropdown-menu-end"> 
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
  )
}

export default SegmentedButtonsCommonDropDown