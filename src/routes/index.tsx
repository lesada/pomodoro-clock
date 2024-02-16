import { Route, Routes as Router } from "react-router-dom";

import DefaultLayout from "@/layouts/default";
import History from "@/pages/History";
import Home from "@/pages/Home";

function Routes() {
  return (
    <Router>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Router>
  );
}

export default Routes;
