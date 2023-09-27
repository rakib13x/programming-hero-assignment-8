import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error/ErrorPage";
import Donation from "./components/Donation/Donation";
import Statistics from "./components/Statistics/Statistics";
import HomePage from "./components/HomePage/Home";
import DonationPage from "./components/DonationPage/DonationPage";
import DonatePageError from "./components/DonatePageError/DonatePageError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/donation-page/:id",
        element: <DonationPage />,
        errorElement: <DonatePageError />,
        loader: () => fetch("data.json"),
      },
      {
        path: "donation",
        element: <Donation />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
