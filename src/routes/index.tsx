import { Route, Routes as Router } from "react-router-dom";

import Home from "@/pages/Home";

function Routes() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
    </Router>
  );
}

export default Routes;
