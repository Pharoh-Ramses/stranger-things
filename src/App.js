
import React from "react";
import { hot } from 'react-hot-loader/root';

const App = (props) => {
  const { name } = props;

  return (
    <>
      <h1>
        Hello {name}
      </h1>
    </>
  );
}

export default hot(App);
