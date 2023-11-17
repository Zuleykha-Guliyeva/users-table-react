import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import PublicComponent from "../core/layouts/public/public.component";
import HomeComponent from "../pages/home/home.component";
import FormComponent from "../pages/form/form.component";
import DetailsComponents from "../pages/details/detail.component";
import TableComponent from "../pages/table/table.component";
import NotfoundComponent from "../pages/not-found/notfound.component";

const router = createBrowserRouter([
  {
    path: Routes.default,
    element: <PublicComponent />,
    children: [
      {
        index: true,
        element: <HomeComponent />,
      },
      {
        path: Routes.table,
        element: <TableComponent />,
      },
      {
        path: Routes.form,
        element: <FormComponent />,
      },
      {
        path: `${Routes.details}/:id`,
        element: <DetailsComponents />,
      },
      {
        path: "*",
        element: <NotfoundComponent />,
      }
    ],
  },
]);

export default router;
