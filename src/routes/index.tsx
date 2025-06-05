import { useRoutes } from "react-router-dom";

import Home from "../pages/Home";

export function Routes(): React.ReactElement | null {
  return useRoutes([{ path: "/", element: <Home /> }]);
}
