import ChatPage from "./pages/chat-page/ChatPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import LoginPage from "./pages/auth-pages/LoginPage";
import RegisterPage from "./pages/auth-pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/home-page/HomePage";
import AssetDashboardPage from "./pages/asset-pages/AssetDashboardPage";
import { MainRefProvider } from "./context/MainRefContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AssetInfoPage from "./pages/asset-pages/AssetInfoPage";
import CreateAssetPage from "./pages/asset-pages/CreateAssetPage";

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
                <Route
                  path="/asset-dashboard"
                  element={<AssetDashboardPage />}
                />
                <Route
                  path="/asset-dashboard/:id"
                  element={<AssetInfoPage />}
                />
                <Route
                  path="/asset-dashboard/create"
                  element={<CreateAssetPage />}
                />
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
