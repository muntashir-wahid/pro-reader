import React, { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";

const router = createBrowserRouter([]);

function App() {
  return (
    <Fragment>
      <Header />
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
