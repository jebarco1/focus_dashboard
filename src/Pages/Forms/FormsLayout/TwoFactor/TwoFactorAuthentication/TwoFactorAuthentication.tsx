import { useState } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap';
import { H3, Image, P } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Service';
import { FactorAuthentication, TwoFactorAuthenticationHeading } from '../../../../../utils/Constant';
import ModalOne from './ModalOne';

const TwoFactorAuthentication = () => {
    const [modalOne, setModalOne] = useState(false);
    const toggle = () => setModalOne(!modalOne);
    return (
      <Col sm={12}>
        <Card>
          <CardBody className="authentication-body">
            <div className="authentication-wrapper">
              <H3>{TwoFactorAuthenticationHeading}</H3>
              <P>{"Click on the authentication button below and scan the QR code"}</P>
              <Image width={406} height={354} src={dynamicImage("forms/qr-scan.png")} alt="qr-scan"/>
            </div>
            <Button color='primary' className="mt-5" onClick={toggle}>{FactorAuthentication}</Button>
            <ModalOne toggle={toggle} modalOne={modalOne} />
          </CardBody>
        </Card>
      </Col>
    );
}

export default TwoFactorAuthentication