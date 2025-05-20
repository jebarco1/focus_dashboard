import { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { BsGear } from 'react-icons/bs';
import './MobileRightHeader.css';

interface RightHeaderProps {
  userData: { firstName: string; lastName: string; level_of_access: number } | null;
}

const MobileRightHeader: React.FC<RightHeaderProps> = ({ userData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClick = (name: string) => {
    if (name === "Log Out") {
      localStorage.removeItem("login");
    }
    toggleMenu();
  };

  return (
    <>
      {/* Gear Icon Button */}
      <div className="mobile-gear-button">
        <Button onClick={toggleMenu} className="gear-btn">
          <BsGear size={20} />
        </Button>
      </div>

      {/* Transparent Gray Overlay */}
      <div className={`mobile-slide-menu-overlay ${isOpen ? 'show' : ''}`} onClick={toggleMenu}></div>

      {/* Slide-In Menu from Right */}
      <div className={`mobile-slide-menu-right ${isOpen ? 'open' : ''}`}>
        <div className="menu-content">
          <h3 className="menu-title">Mobile Options</h3>
          <ul className="menu-list">
            <li>
              <Link to="../users/usersprofile" onClick={() => handleClick("Account")}>
                <Button color="light" className="w-100 text-start">
                  <span>Account</span>
                </Button>
              </Link>
            </li>
            <li>
              <Link to="../users/usersedit" onClick={() => handleClick("Setting")}>
                <Button color="light" className="w-100 text-start">
                  <span>Settings</span>
                </Button>
              </Link>
            </li>
            <li>
              <Link to="../message/messageDetail" onClick={() => handleClick("Notifications")}>
                <Button color="light" className="w-100 text-start">
                  <span>Notifications</span>
                </Button>
              </Link>
            </li>
            <li>
              <Link to="../login" onClick={() => handleClick("Log Out")}>
                <Button color="light" className="w-100 text-start">
                  <span>Log Out</span>
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileRightHeader;
