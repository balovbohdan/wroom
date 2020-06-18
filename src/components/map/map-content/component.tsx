import styled from 'styled-components';

type Props = {
  mapVisible: boolean;
};

const MapContent = styled.div<Props>`
  position: absolute;
  top: 0;
  left:0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.2s;
  opacity: ${(props) => props.mapVisible ? 1 : 0};
`;

export default MapContent;
