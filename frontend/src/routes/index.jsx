import Logout from "../components/Logout";
import Dashboard from "../layouts/Dashboard";
import Test from "../layouts/Test";

const indexRoutes = [
  { path: "/logout", name: "Logout", component: Logout },
  { path: "/", exact: true, name: "Home", component: Dashboard },
  { path: "/test",  name: "Test", component: Test }
];

export default indexRoutes;
