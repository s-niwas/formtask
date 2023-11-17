import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signin from './layouts/signin';
import Home_page from './layouts/home-page';
import New_user from './layouts/newuser';
import Students_page from './layouts/students-page';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/home",
    element: <Home_page/>,
  },
  {
    path: "/students",
    element: <Students_page/>,
  },
  {
    path: "/newuser",
    element: <New_user/>,
  },
  // {
  //   path: "/updateuser",
  //   element: <Update idd={""} name={""} mail={" "} pas={" "} pho={" "}  enroll={" "} doadmit={" "} />
  //    }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
