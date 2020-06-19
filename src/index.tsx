import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import 'core/theme';
import App from 'core/components/app';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route component={App} />
      </IonRouterOutlet>
    </IonReactRouter>
  ),
  document.querySelector('#root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
