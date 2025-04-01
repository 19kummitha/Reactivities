import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../layout/App";
import ActivityDashboard from "../../features/activities/Dashboard/ActivityDashboard";
import HomePage from "../../features/home/HomePage";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetailPage from "../../features/activities/details/ActivityDetailPage";
import Counter from "../../features/Counter/Counter";
import TestErrors from "../../features/errors/TestErrors";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";
import LoginForm from "../../features/account/LoginForm";
import RegisterForm from "../../features/account/RegisterForm";
import RequireAuth from "./RequireAuth";
import ProfilePage from "../../features/activities/profiles/ProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <RequireAuth />,
        children: [
          { path: "activities", element: <ActivityDashboard /> },
          { path: "activities/:id", element: <ActivityDetailPage /> },
          { path: "createActivity", element: <ActivityForm key="create" /> },
          { path: "manage/:id", element: <ActivityForm /> },
          { path: "profiles/:id", element: <ProfilePage /> },
        ],
      },
      { path: "", element: <HomePage /> },
      { path: "activities", element: <ActivityDashboard /> },
      { path: "counter", element: <Counter /> },
      { path: "errors", element: <TestErrors /> },
      { path: "not-found", element: <NotFound /> },
      { path: "server-error", element: <ServerError /> },
      { path: "login", element: <LoginForm /> },
      { path: "register", element: <RegisterForm /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
]);
