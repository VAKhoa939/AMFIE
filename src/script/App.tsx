import ChatPage from "./pages/chat-page/ChatPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import LoginPage from "./pages/auth-pages/LoginPage";
import RegisterPage from "./pages/auth-pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/home-page/HomePage";
import AMSDashboardPage from "./pages/ams-pages/ams-dashboard-page/AMSDashboardPage";
import { MainRefProvider } from "./context/MainRefContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AssetInfo from "./pages/ams-pages/AssetInfo";

function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <MainRefProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<AMSDashboardPage />} />
                <Route path="/dashboard/:assetId" element={<AssetInfo />} />
                <Route path="/dashboard/create-asset" element={<AssetInfo />} />
                <Route path="/chat" element={<ChatPage />} />
              </Routes>
            </Layout>
          </MainRefProvider>
        </QueryClientProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
