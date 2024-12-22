// Mengimpor React dan library terkait untuk membangun aplikasi
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home.jsx";
import Novels from "./pages/Novels.jsx";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";
import NovelDetails from "./pages/NovelDetails.jsx"; // Pastikan file ini sudah ada

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "novels",
        element: (
          <ProtectedRoute>
            <Novels />
          </ProtectedRoute>
        ),
      },
      {
        path: "novel/:id", // Tambahkan rute ini
        element: <NovelDetails />,
      },
      { path: "about", element: <About /> },
      { path: "profil", element: <Profile /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

