import { Route, Routes as Router } from "react-router-dom";

import DefaultLayout from "@/layouts/default";
import History from "@/pages/History";
import Home from "@/pages/Home";

import { RoutesPaths } from "./routesPaths";

function Routes() {
  return (
    <Router>
      <Route path={RoutesPaths.BASE} element={<DefaultLayout />}>
        <Route path={RoutesPaths.HOME} element={<Home />} />
        <Route path={RoutesPaths.HISTORY} element={<History />} />
      </Route>
    </Router>
  );
}

export default Routes;
