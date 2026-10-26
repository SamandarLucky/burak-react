import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";

import { Link, Switch, Route } from "react-router-dom";
import "../css/app.css";
import Stack from "@mui/material/Stack";
import React from "react";
import { Users } from "./screens/User";
import { About } from "./screens/About";

function App() {
  return (
   <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
  );
};

function Home() {
  return <Container>Home</Container>;
}

export default App;





