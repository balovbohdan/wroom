import React from 'react';
import { Route, Redirect } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { IonApp, IonRouterOutlet } from '@ionic/react';

import History from 'pages/history';
import HistoryItemInfo from 'pages/history-item-info';
import Main from 'pages/main';
import Settings from 'pages/settings';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/history" component={History} exact />
        <Route path="/history-item-info/:id" component={HistoryItemInfo} />
        <Route path="/" component={Main} exact />
        <Route path="/settings" component={Settings} exact />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
