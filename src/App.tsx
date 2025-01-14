import React from 'react';
import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import AppBar from './components/AppBar';
import { SearchProvider } from './context/searchContext';

function App() {

  const router = createBrowserRouter([
    {
        path: "/",
        element: <div><AppBar/><Outlet/></div>,
        children: [
            {
                element: <div><h1>Results</h1></div>,
                path: '/results',
            }
        ]
    },
]);
  return (
    <div className="App">
       <SearchProvider>
          <RouterProvider router={router} />
       </SearchProvider>
    </div>
  );
}

export default App;
