import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";
import router from "./router/router";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./component/Provider/AuthProvider";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();





ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthProvider>
  </QueryClientProvider>
);
