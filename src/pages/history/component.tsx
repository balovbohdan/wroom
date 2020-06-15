import React from 'react';
import { chevronBack } from 'ionicons/icons';
import { IonPage, IonContent, IonIcon, IonRouterLink } from '@ionic/react';

import dummy from 'core/dummy';
import Header from 'components/header';

import Items from './items';

const History: React.FC = () => (
  <IonPage>
    <Header title="История" button={
      <IonRouterLink href="/" color="dark">
        <IonIcon icon={chevronBack} size="large" />
      </IonRouterLink>
    } />
    <IonContent>
      <Items items={dummy.history} />
    </IonContent>
  </IonPage>
);

export default History;
