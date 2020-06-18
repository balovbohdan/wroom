import { mergeDeepRight } from 'ramda';

import * as T from './types';

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

export const addFeatures = (source: any, featuresData: T.FeatureData[]) => {
  const newFeatures = featuresData.map(createFeature);
  const updatedFeatures = source.data.features.concat(newFeatures);

  return mergeDeepRight(source, {
    data: {
      features: updatedFeatures,
    },
  });
};

export const updateFeaturesCoordinates = (source: any, featuresData: T.UpdateFeatureCoordinatesData[]) => {
  const features = source.data.features as any[];
  const updatedFeatures = features.map((feature: any) => {
    const featureData = featuresData.find(({ id }) => id === feature.id);

    if (featureData) {
      return mergeDeepRight(feature, {
        geometry: {
          coordinates: featureData.coordinates,
        },
      });
    } else {
      return feature;
    }
  });

  return mergeDeepRight(source, {
    data: {
      features: updatedFeatures,
    },
  });
};
