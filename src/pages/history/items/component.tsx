import React, { Fragment } from 'react';
import {
  IonIcon,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonRouterLink,
} from '@ionic/react';

import { getHelpTypeTitle } from '../../shared/utils/help-type';

type Item = {
  id: string;
  type: string;
  time: string;
};

type Props = {
  items: Item[];
};

const Items: React.FC<Props> = ({ items }) => (
  <Fragment>
    {
      items.map(({ id, type, time }) => (
        <IonRouterLink href={`/history-item-info/${id}`}>
          <IonCard key={`${type}-${time}`}>
            <IonCardHeader>
              <IonCardSubtitle>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonText color="dark">{getHelpTypeTitle(type)}</IonText>
                    </IonCol>
                    <IonCol>
                      <IonText color="medium">{time}</IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
        </IonRouterLink>
      ))
    }
  </Fragment>
);

export default Items;
