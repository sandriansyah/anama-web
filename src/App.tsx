import type { Component } from "solid-js";

import styles from "./App.module.css";
import { routes } from "./routes";
import { useRoutes } from "@solidjs/router";

const App: Component = () => {
  const Routes = useRoutes(routes);
  return (
    <div>
      <Routes />
    </div>
  );
};

export default App;
