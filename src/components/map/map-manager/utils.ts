import { Geolocation } from '@ionic-native/geolocation/ngx';

export const getGeolocationSubscription = (geolocation: Geolocation, onGeolocationChange: Function) => {
  const observable = geolocation.watchPosition();

  return observable.subscribe(({ coords }) => {
    const { longitude, latitude } = coords;

    onGeolocationChange([longitude, latitude]);
  });
};
