import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import { IonApp, IonPage } from "@ionic/react";
import "./App.css";
import Signin from "./pages/Signin/Signin";
import * as ROUTES from "./constants/routes";

const App: React.FC = () => {
  return (
    <Router>
      <IonApp>
        <IonPage>
          <Switch>
            {/* <Route exact path={ROUTES.SIGN_IN} component={Signin} /> */}
            <Route exact path="/" component={Signin} />
          </Switch>
        </IonPage>
      </IonApp>
    </Router>
  );
};

export default App;
