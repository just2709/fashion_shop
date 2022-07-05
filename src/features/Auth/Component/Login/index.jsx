import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import LoginForm from "../LoginForm/index";
import { login } from "../userSlice";

const Login = (props) => {
  const dispatch = useDispatch();
  const handleFormSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log("User", user);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleFormSubmit} />
    </div>
  );
};

Login.propTypes = {};

export default Login;
