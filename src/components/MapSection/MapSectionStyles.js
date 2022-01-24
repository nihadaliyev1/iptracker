import styled, { css } from "styled-components";
import { MapContainer } from "react-leaflet";

export const Section = styled.section`
  height: 65vh;
  position: relative;

  ${(props) =>
    props.$loading &&
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

export const Map = styled(MapContainer)`
  height: 100%;
  width: 100%;
`;

export const Spinner = styled.object.attrs({
  type: "image/svg+xml",
})`
  position: absolute;
  z-index: 100000000000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
