import React from 'react';
import { Route } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { IonApp, IonRouterOutlet } from '@ionic/react';

import History from 'pages/history';
import HistoryItemInfo from 'pages/history-item-info';
import Main from 'pages/main';
import Settings from 'pages/settings';
import AuthContext from 'shared/components/auth-context';

type Props = {
  auth: any;
  tokenRenewalCompleted: boolean;
};

const App: React.FC<Props> = (props: Props) => (
  props.tokenRenewalCompleted ? (
    <IonApp>
      <AuthContext.Provider value={props.auth}>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/history" component={History} exact />
            <Route path="/history-item-info/:id" component={HistoryItemInfo} />
            <Route path="/" component={Main} exact />
            <Route path="/settings" component={Settings} exact />
          </IonRouterOutlet>
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  ) : (
    <span>Loading...</span>
  )
);

export default App;
