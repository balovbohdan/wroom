import { mergeDeepRight } from 'ramda';

import * as T from './types';
import * as constants from './constants';

const createFeature = ({ id, icon, coordinates }: T.FeatureData) => ({
  type: 'Feature',
  properties: { icon },
  geometry: {
    type: 'Point',
    coordinates,
  },
  id,
});

export const createSource = (featuresData: T.FeatureData[]) => ({
  type: 'geojson',
  data: {
    type: 'FeatureCollection',
    features: featuresData.map(createFeature),
  },
});

export const addFeatures = (source: any, featuresData: T.FeatureData[]) => (
  featuresData.reduce((result, featureData) => {
    const newFeature = createFeature(featureData);
    const updatedFeatures = result.data.features.concat(newFeature);

    return mergeDeepRight(result, {
      data: {
        features: updatedFeatures,
      },
    });
  }, source)
);

export const updateFeaturesCoordinates = (source: any, featuresData: T.UpdateFeatureCoordinatesData[]) => (
  featuresData.reduce((result, { id, coordinates }) => {
    const features = result.data.features as any[];
    const updatedFeatures = features.map((feature) => (
      feature.id === id ? mergeDeepRight(feature, { geometry: { coordinates } }) : feature
    ));

    return mergeDeepRight(result, {
      data: {
        features: updatedFeatures,
      },
    });
  }, source)
);
