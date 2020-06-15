import React, { Fragment } from 'react';
import { skull } from 'ionicons/icons';
import { IonPage, IonIcon, IonFab, IonFabButton, IonMenuButton, IonContent } from '@ionic/react';

import Map from 'components/map';
import Header from 'components/header';
import HeaderMenu from 'components/header/menu';

const Main: React.FC = () => (
  <Fragment>
    <HeaderMenu />
    <IonPage id="menu">
      <Header title="Wroom!" button={<IonMenuButton color="dark" />} />
      <IonContent>
        <Map />
      </IonContent>
      <IonFab vertical="bottom" horizontal="end">
        <IonFabButton color="danger">
          <IonIcon icon={skull} size="large" />
        </IonFabButton>
      </IonFab>
    </IonPage>
  </Fragment>
);

export default Main;
