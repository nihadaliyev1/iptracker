import React from "react";
import styled, { css } from "styled-components";
import { MapContainer, TileLayer, MapConsumer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import Marker from "react-leaflet-enhanced-marker";
import { connect } from "react-redux";
import Animation from "../images/Magnify-1s-200px.svg";

const Section = styled.section`
  height: 65vh;
  position: relative;

  ${(props) =>
    props.loading &&
    css`
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        left: 0;
        top: 0;
        z-index: 10000000000;
      }
    `}
`;

const Map = styled(MapContainer)`
  height: 100%;
  width: 100%;
`;

const Spinner = styled.object.attrs({
  type: "image/svg+xml",
})`
  position: absolute;
  z-index: 100000000000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const MapSection = ({ location, loading }) => {
  return (
    <Section loading={loading}>
      {loading && <Spinner data={Animation}>Spinner</Spinner>}

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
        {location && (
          <MapConsumer>
            {(map) => {
              map.flyTo([location.location.lat, location.location.lng], 14);
              return null;
            }}
          </MapConsumer>
        )}
        {location && (
          <Marker
            icon={
              <img
                src={require("../images/icon-location.svg").default}
                style={{ width: "100" }}
              />
            }
            position={[location.location.lat, location.location.lng]}
          />
        )}
      </Map>
    </Section>
  );
};

const mapStateToProps = (state) => {
  return {
    location: state.location,
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(MapSection);
