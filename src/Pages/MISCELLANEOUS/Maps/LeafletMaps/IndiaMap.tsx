import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '../../../../Common/CommonHeader'
import { MapContainer, TileLayer } from "react-leaflet";
import { LeafletIndiaMap } from '../../../../utils/Constant';
const IndiaMap = () => {
    const subTitle= [ 
      {text:"Below Map is displaying the India map."}
    ]
    const indiaData = { lat: 20.5937, lng: 78.9629 };
  return (
    <Col sm={6}>
      <Card>
        <CommonHeader title={LeafletIndiaMap} subTitle={subTitle} />
        <CardBody>
          <MapContainer className="jvector-map-height z-0" style={{ height: 389 }} zoom={5} center={indiaData} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={false} dragging={true}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  )
}

export default IndiaMap