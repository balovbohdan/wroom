export const SOURCE_ID = 'points';

export const LAYER_DEFINITION: any = {
  id: 'points',
  type: 'symbol',
  source: 'points',
  layout: {
    // get the icon name from the source's "icon" property
    // concatenate the name to get an icon from the style's sprite sheet
    'icon-image': ['concat', ['get', 'icon'], '-15'],
    'icon-size': 1.2,

    // get the title name from the source's "title" property
    'text-field': ['get', 'title'],

    'text-size': 11,
    'text-anchor': 'top',
    'text-offset': [0, 0.6],
    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
  },
  paint: {
    'text-color': 'white',
  }
};
