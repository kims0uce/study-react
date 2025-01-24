import { createBrowserRouter } from "react-router-dom";
import PublicPage from "../pages/PublicPage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "../components/ProtectedRoute";
import UserPage from "../pages/UserPage";
import AdminPage from "../pages/AdminPage";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <PublicPage /> },
      { path: "login", element: <LoginPage /> },
      {
        path: "users",
        element: (
          <ProtectedRoute>
            <UserPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "admins",
        element: (
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
