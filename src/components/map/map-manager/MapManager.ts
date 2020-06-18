import mapboxgl from 'mapbox-gl';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import environment from 'environment';
import * as coreConstants from 'core/constants';

import * as T from './types';
import * as utils from './utils';
import { Features } from './features';
import * as constants from './constants';

export class MapManager {
  private readonly props: T.Props;
  private readonly geolocation: Geolocation;
  private readonly geolocationSubscription: any;
  private map: mapboxgl.Map | undefined = undefined;
  private features: Features | undefined = undefined;

  constructor(props: T.Props) {
    this.props = props;
    this.geolocation = new Geolocation();
    this.geolocationSubscription = utils.getGeolocationSubscription(this.geolocation, this.handleUserGeolocationChange);
  }

  async initializeMap() {
    if (this.map) {
      throw new Error('Map has already been initialized.');
    } else {
      mapboxgl.accessToken = environment.MAPBOXGL_ACCESS_TOKEN;
      this.map = await this.createMap();
    }
  }

  addVehicles(vehicles: T.Vehicle[]) {
    if (this.features) {
      const featuresData = vehicles.map(({ id, coordinates }) => ({
        icon: 'car',
        id: `${coreConstants.FEATURE_IDS.VEHICLE}-${id}`,
        coordinates,
      }));

      this.features.addFeatures(featuresData);
    } else {
      throw new Error('Features instance has not been initialized.');
    }
  }

  updateVehicles(vehicles: T.Vehicle[]) {
    if (this.features) {
      const featuresData = vehicles.map(({ id, coordinates }) => ({
        id: `${coreConstants.FEATURE_IDS.VEHICLE}-${id}`,
        coordinates,
      }));

      this.features.updateFeaturesCoordinates(featuresData);
    } else {
      throw new Error('Features instance has not been initialized.');
    }
  }

  private async createMap(): Promise<mapboxgl.Map> {
    const coordinates = await this.getUserCoordinates();
    const map = new mapboxgl.Map({
      zoom: constants.ZOOM,
      pitch: constants.PITCH,
      attributionControl: false,
      center: coordinates as any,
      style: constants.MAP_STYLE,
      container: this.props.containerId,
    });

    map.on('resize', () => {
      this.props.onReadyToDisplay();
    });

    return new Promise((resolve) => {
      map.on('load', () => {
        map.resize();
        this.createFeatures(map, coordinates);
        resolve(map);
      });
    });
  }

  private createFeatures(map: mapboxgl.Map, userCoordinates: number[]) {
    if (this.features) {
      throw new Error('Features have been already created.');
    } else {
      this.features = new Features(map, [{
        icon: 'car',
        coordinates: userCoordinates,
        id: coreConstants.FEATURE_IDS.USER,
      }]);
    }
  }

  private async getUserCoordinates() {
    const position = await this.geolocation.getCurrentPosition({ enableHighAccuracy: true });

    return [
      position.coords.longitude + constants.IOS_DEV_COORDINATES_CORRECTIONS.longitude,
      position.coords.latitude + constants.IOS_DEV_COORDINATES_CORRECTIONS.latitude,
    ];
  }

  private handleUserGeolocationChange = (coordinates: number[]) => {
    if (this.features) {
      this.features.updateUserCoordinates(coordinates);
    }
  };
}
