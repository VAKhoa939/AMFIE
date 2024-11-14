import { useRef, useEffect } from "react";
import ChatPage from "./chat-page/ChatPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "./auth-pages/LoginPage";
import RegisterPage from "./auth-pages/RegisterPage";
import DashboardPage from "./dashboard-page/DashboardPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const mainRef = useRef<HTMLElement>(null);
  let isLoggedin = false;

  useEffect(() => {
    mainRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/login" element={<LoginPage mainRef={mainRef} />} />
            <Route
              path="/register"
              element={<RegisterPage mainRef={mainRef} />}
            />
            <Route
              path="/dashboard"
              element={<DashboardPage mainRef={mainRef} />}
            />
            <Route path="/chat" element={<ChatPage mainRef={mainRef} />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
