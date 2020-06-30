import React from 'react';
import { star, exitOutline, fileTrayStackedOutline, settingsOutline } from 'ionicons/icons';
import {
  IonMenu,
  IonContent,
  IonIcon,
  IonList,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonAvatar,
  IonText,
} from '@ionic/react';

import { withAuthContext } from 'shared/components/auth-context';

import * as style from './style';

type Props = {
  authContext: any;
};

const Header: React.FC<Props> = (props: Props) => (
  <IonMenu side="start" type="push" contentId="menu">
    <IonContent>
      <IonItem color="light" lines="none">
        <IonGrid style={{ padding: '30px 0' }}>
          <IonRow>
            <IonCol size="3">
              <IonAvatar>
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" alt="avatar" />
              </IonAvatar>
            </IonCol>
            <IonCol className="ion-align-self-center">
              <IonRow>
                <IonText>Balov Bohdan</IonText>
              </IonRow>
              <IonRow>
                <IonIcon icon={star} size="small" color="gold" />
                <IonText className="ion-align-self-center" style={{ fontSize: '.7em', marginLeft: '5px' }}>
                  4,9
                </IonText>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
      <IonList style={style.buttonsList}>
        <IonItem href="/history" detail={false}>
          <IonIcon icon={fileTrayStackedOutline} slot="start" />
          <IonLabel>История</IonLabel>
        </IonItem>
        <IonItem href="/settings" detail={false}>
          <IonIcon icon={settingsOutline} slot="start" />
          <IonLabel>Настройки</IonLabel>
        </IonItem>
        <IonItem onClick={props.authContext.logout} detail={false}>
          <IonIcon icon={exitOutline} slot="start" />
          <IonLabel>Выйти</IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  </IonMenu>
);

export default withAuthContext(Header);
