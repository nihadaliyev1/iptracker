import React, { useContext } from "react";
import { TileLayer, MapConsumer } from "react-leaflet";
import AppContext from "../../context/AppContext";
import "leaflet/dist/leaflet.css";
import Marker from "react-leaflet-enhanced-marker";
import Animation from "../../images/Magnify-1s-200px.svg";
import { useSetCoordinatesQuery } from "../../apis";
import { Section, Map, Spinner } from "./MapSectionStyles";

const MapSection = () => {
  const { skip, ip } = useContext(AppContext);
  const { data, isLoading } = useSetCoordinatesQuery(ip, { skip });
  console.log(isLoading);
  return (
    <Section $loading={isLoading}>
      {isLoading && <Spinner data={Animation}>Spinner</Spinner>}

      <Map
        center={[51.505, -0.09]}
        zoom={2.4}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data?.location ? (
          <React.Fragment>
            <MapConsumer>
              {(map) => {
                map.flyTo([data.location.lat, data.location.lng], 14);
                return null;
              }}
            </MapConsumer>

            <Marker
              icon={
                <img
                  src={require("../../images/icon-location.svg").default}
                  style={{ width: "100" }}
                  alt="location"
                />
              }
              position={[data.location.lat, data.location.lng]}
            />
          </React.Fragment>
        ) : null}
      </Map>
    </Section>
  );
};

export default MapSection;
