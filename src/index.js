import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Firebase, { FirebaseContext } from "./Firebase";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </Router>,
  document.getElementById("root")
);
