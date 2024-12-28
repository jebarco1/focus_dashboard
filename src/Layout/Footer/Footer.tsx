import { Col, Container, Row } from 'reactstrap'
import SVG from '../../utils/CommonSvgIcon/SVG'
import { P } from '../../AbstractElements'
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { pathname } = useLocation();
  const darkFooter = pathname === `${process.env.PUBLIC_URL}/pagelayout/footerdark` ? "footer-dark" : "";
  const fixedFooter = pathname === `${process.env.PUBLIC_URL}/pagelayout/footerfixed` ? "footer-fix" : "";
  return (
    <footer className={`footer ${darkFooter} ${fixedFooter}`}>
        <Container fluid >
            <Row>
                <Col md="6" className="footer-copyright">
                    <P className="mb-0">Copyright 2024 © Lottery Insights.</P>
                </Col>
               
            </Row>
        </Container>
    </footer>
  )
}

export default Footer