import { Nav, NavItem, NavLink } from 'reactstrap'
import { Href } from '../../../../../utils/Constant'
import { useState } from 'react';
import ClothsDetailsTabContent from './ClothsDetailsTabContent';
import { clothsDetailsData } from '../../../../../Data/Apps/Ecommerce/ProductPageData';

const ClothsDetails = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <Nav tabs className="border-tab mb-0 nav-primary">
        {clothsDetailsData.map((data, index) => (
          <NavItem key={index}>
            <NavLink href={Href} className={activeTab === index+1 ? "active" : ""} onClick={() => setActiveTab(index+1)}>
              {data}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <ClothsDetailsTabContent activeTab={activeTab} />
    </>
  )
}

export default ClothsDetails