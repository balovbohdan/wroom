import React, { Fragment } from 'react';
import {
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonRouterLink,
} from '@ionic/react';

import { getHelpTypeTitle } from 'pages/shared/utils/help-type';

import * as T from './types';

type Props = {
  items: T.Item[];
};

const Items: React.FC<Props> = ({ items }: Props) => (
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
