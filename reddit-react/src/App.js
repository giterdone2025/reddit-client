import React from 'react';
import Root from "./components/root";
import HomePage from "./pages/home";
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom';

function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Root/>}>
            <Route index element={<HomePage/>}/>
            <Route path=":type" element={<HomePage/>}/>
        </Route>
    ));


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
