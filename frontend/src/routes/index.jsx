import Logout from "../components/Logout";
import Home from "../layouts/Home/Home";

const indexRoutes = [
  { path: "/logout", name: "Logout", component: Logout },
  { path: "/dashboard",  name: "Home", component: Home },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];

export default indexRoutes;
