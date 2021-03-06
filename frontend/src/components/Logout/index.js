import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions";

const Logout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logout());
  });

  return null;
};

export default Logout;
