import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '../../../../Common/CommonHeader'
import { MapContainer, TileLayer } from "react-leaflet";
import { LeafletAustraliaMap } from '../../../../utils/Constant';
const AustraliaMap = () => {
    const subTitle = [
      {
        text:"Below Map is displaying the Australia map."
      }
    ]
    const australiaData = { lat: -25.2744, lng: 130.7751 };
  return (
    <Col sm={6}>
      <Card>
        <CommonHeader title={LeafletAustraliaMap} subTitle={subTitle}/>
        <CardBody>
          <MapContainer className="jvector-map-height z-0" style={{ height: 389 }} zoom={4} center={australiaData} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={false} dragging={true}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  )
}

export default AustraliaMap