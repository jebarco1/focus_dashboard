import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '../../../../Common/CommonHeader'
import { CurrentLocation, MarkerMap } from '../../../../utils/Constant'
import {GoogleMap,InfoWindow,useJsApiLoader,} from "@react-google-maps/api";
import { useState } from 'react';
const containerStyle = {
    height: "500px",
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523,
  };
  
const MarkerMapComp = () => {
    const [location, setlocation] = useState({
        address: false,
        mapPosition: {
          lat: 18.5204,
          lng: 73.8567,
        },
        markerPosition: {
          lat: 18.5204,
          lng: 73.8567,
        },
    });
    
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&v=3.exp&libraries=geometry,drawing,places",
    });
  return (
    <Col lg={6} md={12}>
        <Card>
          <CommonHeader title={MarkerMap} />
          <CardBody>
            <div className="map-js-height">
              <div id="gmap-simple" className="map-block">
                {isLoaded ? (
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                  >
                    {location.address ? (
                      <InfoWindow
                        position={{
                          lat: location.markerPosition.lat + 0.0018,
                          lng: location.markerPosition.lng,
                        }}
                      >
                        <div>
                          <span style={{ padding: 0, margin: 0 }}>{CurrentLocation}</span>
                        </div>
                      </InfoWindow>
                    ) : (
                      ""
                    )}
                    ;
                  </GoogleMap>
                ) : (
                  ""
                )}
              </div>
            </div>
          </CardBody>
        </Card>
    </Col>
  )
}

export default MarkerMapComp