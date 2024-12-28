import SearchBar from './SearchBar/topButtons';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import { Row } from 'reactstrap';
import RightHeader from './RightHeader/RightHeader';

const index = () => {
  return (
    <Row className="header-wrapper m-0">
    
      <SearchBar />
      <RightHeader />
    </Row>
  )
}

export default index