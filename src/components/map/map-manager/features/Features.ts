import { Map, GeoJSONSource } from 'mapbox-gl';

import * as coreConstants from 'core/constants';

import * as T from './types';
import * as utils from './utils';
import * as constants from './constants';

export class Features {
  private source: any;
  private readonly map: Map;

  constructor(map: Map, featuresData: T.FeatureData[] = []) {
    this.map = map;
    this.source = utils.createSource(featuresData);

    this.map.addSource(constants.SOURCE_ID, this.source);
    this.map.addLayer(constants.LAYER_DEFINITION);
  }

  addFeatures(featuresData: T.FeatureData[]) {
    const geoJSONSource = this.map.getSource(constants.SOURCE_ID) as GeoJSONSource;

    this.source = utils.addFeatures(this.source, featuresData);

    geoJSONSource.setData(this.source.data);
  }

  updateUserCoordinates(coordinates: number[]) {
    this.updateFeaturesCoordinates([{
      id: coreConstants.FEATURE_IDS.USER,
      coordinates,
    }]);
    // this.map.panTo({ lng: coordinates[0], lat: coordinates[1] });
  }

  updateFeaturesCoordinates(featuresData: T.UpdateFeatureCoordinatesData[]) {
    const geoJSONSource = this.map.getSource(constants.SOURCE_ID) as GeoJSONSource;

    this.source = utils.updateFeaturesCoordinates(this.source, featuresData);

    geoJSONSource.setData(this.source.data);
  }
}
