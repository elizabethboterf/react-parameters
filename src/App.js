import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import NoMatch from "./NoMatch.js"
import UserProfile from "./UserProfile.js"

function NewUser (){
  return (<p>Unable to create a new user</p>);
}

function App() {
  return (
    // No need to add <Router>, it has been added to ./index.js
    <div className="App">
      <Link to="/user/new">New User</Link>
      {Array(10)
        .fill()
        .map((ignoredValue, index) => index + 1)
        .map((id) => (
          <div key={id}>
            <Link to={`/user/${id}`} data-testid={`user-${id}`}>
              User{id}
            </Link>
          </div>
        ))}
      <Switch>
        <Route path="/user/:userId">
          <UserProfile />
        </Route>
        <Route path="/user/new">
          <h1>Unable to create a new user</h1>
        </Route>
      <NoMatch />
      </Switch>
    </div>
  );
}

export default App;
