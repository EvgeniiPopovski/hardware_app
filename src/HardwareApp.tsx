import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Main } from './components/Main/Main';
import './hardwareApp.scss';

const semisectionNames: Array<string> = ['Привет', 'Андрей'];

const HardwareApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route>
          Sorry, Page Not Found
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export { HardwareApp };
