import React, {useState, useCallback} from 'react';
import Root from "./components/root";
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom';

function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Root/>}>

        </Route>
    ));


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
