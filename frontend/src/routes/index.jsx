import Logout from "../components/Logout";
import Dashboard from "../layouts/Dashboard";

const indexRoutes = [
  { path: "/logout", name: "Logout", component: Logout },
  { path: "/", exact: true, name: "Home", component: Dashboard }
];

export default indexRoutes;
