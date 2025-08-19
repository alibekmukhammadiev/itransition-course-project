import { useEffect } from "react";
// react-router-dom
import { Routes, Route } from "react-router-dom";

// darkmode.js
import Darkmode from "darkmode-js";

// components
import Layout from "./components/Layout";

// pages
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import MainPage from "./pages/MainPage";

// checking whether user logged in before
import ProtectedRoute from "./context/ProtectedRoute";

function App() {
  // Initialize Darkmode.js when App component mounts
  useEffect(() => {
    const options = {
      bottom: "64px",
      right: "32px",
      left: "unset",
      time: "0.5s",
      mixColor: "#fff",
      backgroundColor: "#fff",
      buttonColorDark: "#100f2c",
      buttonColorLight: "#fff",
      saveInCookies: true,
      label: "🌓",
      autoMatchOsTheme: true,
    };

    const darkmode = new Darkmode(options);
    darkmode.showWidget();
  }, []);
  return (
    <Layout>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        {/* Protected main page */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
