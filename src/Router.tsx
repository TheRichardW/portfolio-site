import {
  createRouter,
  createRoute,
  createRootRoute,
  Outlet,
} from "@tanstack/react-router";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <div id="app-wrapper">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about-me",
  component: AboutMe,
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: AboutMe,
});

// Create the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  projectsRoute,
]);

// Create the router instance
export const router = createRouter({ routeTree });
