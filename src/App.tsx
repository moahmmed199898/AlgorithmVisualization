import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history"
import Columns from './columns/columns';
import CodeView from "./codeView/codeView";
import { observer } from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.scss"
@observer
export default class App extends React.Component {
  history: any;
  constructor(props: any) {
    super(props);
    this.history = createBrowserHistory();
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <CodeView />
            </Route>
            <Route path="/codeView">
              <CodeView />
            </Route>
            <Route path="/visualization">
              <Columns />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}