import React, { Fragment } from 'react';
import { chevronBack } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import { IonPage, IonContent, IonIcon, IonItem, IonText, IonRouterLink, IonGrid, IonRow, IonCol } from '@ionic/react';

import dummy from 'dummy';
import Header from 'components/header';

import { getHelpTypeTitle } from '../shared/utils/help-type';

type Props = RouteComponentProps<{
  id: string;
}>;

const HistoryItemInfo: React.FC<Props> = ({ match }) => {
  const historyItem = dummy.history.find(({ id }) => id === match.params.id);

  return (
    <IonPage>
      <Header title="История" button={
        <IonRouterLink href="/history" color="dark">
          <IonIcon icon={chevronBack} size="large" />
        </IonRouterLink>
      } />
      <IonContent>
        {
          historyItem ? (
            <Fragment>
              <IonItem lines="none">
                <IonText color="dark" className="ion-margin-end"><strong>Помощь:</strong></IonText>
                <IonText color="dark">{getHelpTypeTitle(historyItem.type)}</IonText>
              </IonItem>
              <IonItem lines="none">
                <IonText color="dark" className="ion-margin-end"><strong>Когда:</strong></IonText>
                <IonText color="dark">{historyItem.time}</IonText>
              </IonItem>
            </Fragment>
          ) : (
            <IonItem lines="none">
              <IonText color="medium">Не удалось найти информацию</IonText>
            </IonItem>
          )
        }
      </IonContent>
    </IonPage>
  );
};

export default HistoryItemInfo;
