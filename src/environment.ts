type Environment = {
  API_URL: string;
  MAPBOXGL_ACCESS_TOKEN: string;
  AUTH0_DOMAIN: string;
  AUTH0_CLIENT_ID: string;
  AUTH0_CALLBACK_URL: string;
  AUTH0_AUDIENCE: string;
};

const get = (key: string): string | never => {
  const value = process.env[key];

  if (value === undefined) {
    throw new Error(`Failed to find "${key}" environment variable.`);
  } else {
    return value;
  }
};

const environment: Environment = {
  API_URL: get('REACT_APP_API_URL'),
  MAPBOXGL_ACCESS_TOKEN: get('REACT_APP_MAPBOXGL_ACCESS_TOKEN'),

  AUTH0_DOMAIN: get('REACT_APP_AUTH0_DOMAIN'),
  AUTH0_CLIENT_ID: get('REACT_APP_AUTH0_CLIENT_ID'),
  AUTH0_CALLBACK_URL: get('REACT_APP_AUTH0_CALLBACK_URL'),
  AUTH0_AUDIENCE: get('REACT_APP_AUTH0_AUDIENCE'),
};

export default environment;
