import React, { Component, Fragment } from 'react';

import dummy from 'dummy';

import Preloader from './preloader';
import MapContent from './map-content';
import * as constants from './constants';
import { MapManager } from './map-manager';

type Props = {};

class Map extends Component<Props> {
  mapManager: MapManager;

  state = {
    mapVisible: false,
  };

  constructor(props: Props) {
    super(props);

    this.mapManager = new MapManager({
      containerId: constants.MAP_CONTAINER_ID,
      onReadyToDisplay: this.handleMapReadyToDisplay,
    });
  }

  async componentDidMount() {
    await this.mapManager.initializeMap();

    // todo: remove debug code
    setTimeout(this.handleVehiclesLoaded, 2000);
    setTimeout(this.handleUpdateVehiclesCoordinates, 5000);
  }

  handleUpdateVehiclesCoordinates = () => {
    const featuresData = dummy.vehicles.map((vehicle) => ({
      ...vehicle,
      coordinates: [
        vehicle.coordinates[0] + 0.0001,
        vehicle.coordinates[1] + 0.00015,
      ],
    }));

    this.mapManager.updateVehicles(featuresData);
  };

  handleVehiclesLoaded = () => {
    this.mapManager.addVehicles(dummy.vehicles);
  };

  handleMapReadyToDisplay = () => {
    this.setState(() => ({ mapVisible: true }));
  };

  render() {
    return (
      <Fragment>
        {this.state.mapVisible || <Preloader />}
        <MapContent mapVisible={this.state.mapVisible} id={constants.MAP_CONTAINER_ID} />
      </Fragment>
    );
  }
}

export default Map;
