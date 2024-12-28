import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '../../../../Common/CommonHeader'
import { LeafletWorldMap } from '../../../../utils/Constant'
import { MapContainer, TileLayer } from "react-leaflet";
import { FC, useEffect, useState } from 'react';
import '../../../../../node_modules/leaflet/dist/leaflet.css';

const WorldMap: FC = () => {
  const usa_POSITION = { lat: 50, lng: 10 };
  const subTitle = [
    {
      text:"Below Map is displaying the world map."
    }
  ]
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 2500); 
  }, []);
  return (
    <Col sm={6}>
      <Card>
        <CommonHeader title={LeafletWorldMap} subTitle={subTitle} />
        <CardBody>
        {display && (
           <MapContainer style={{ height: 389 }} easeLinearity={0.35} attributionControl={true} center={usa_POSITION} zoom={13} scrollWheelZoom={true} className="z-0 jvector-map-height">
           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
         </MapContainer>
        )}
        </CardBody>
      </Card>
    </Col>
  )
}

export default WorldMap