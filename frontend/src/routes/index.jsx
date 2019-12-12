import Logout from "../components/Logout";
import Test from "../layouts/Test";
import Home from "../layouts/Home/Home";

const indexRoutes = [
  { path: "/logout", name: "Logout", component: Logout },
  { path: "/dashboard",  name: "Home", component: Home },
  { path: "/test",  name: "Test", component: Test },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];

export default indexRoutes;
