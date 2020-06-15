import React from 'react';
import { chevronBack } from 'ionicons/icons';
import { IonPage, IonContent, IonImg, IonIcon, IonItem, IonText, IonGrid, IonRow, IonRouterLink } from '@ionic/react';

import Header from 'components/header';

import launchIcon from '../shared/icons/launch.svg';

const Settings = () => (
  <IonPage>
    <Header title="Настройки" button={
      <IonRouterLink href="/" color="dark">
        <IonIcon icon={chevronBack} size="large" />
      </IonRouterLink>
    } />
    <IonContent>
      <IonGrid className="ion-margin-top ion-margin-horizontal">
        <IonRow>
          <IonText color="medium">Данная страница находится в разработке</IonText>
        </IonRow>
        <IonRow className="ion-justify-content-center ion-margin-top">
          <IonImg src={launchIcon} style={{
            width: 'calc(100% - 20px)',
            maxWidth: '100px',
          }} />
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
);

export default Settings;
