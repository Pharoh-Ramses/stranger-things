import React from "react";
import { hot } from "react-hot-loader/root";
import PostList from "./PostList";
import RegisterForm from "./register";
import LoginForm from "./logIn";
import LogOutButton from "./logOut";

const App = (props) => {
  const { name } = props;
  return (
    <>
      <h1>Welcome, {name}</h1>
      <LoginForm />
      <LogOutButton />
      <RegisterForm />
      <PostList />
      
    </>
  );
};

export default hot(App);

