import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./Router.tsx";
import { RouterProvider } from "@tanstack/react-router";

import "./styles/main.scss";

// Register the router for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
