import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { GameProvider } from "./context/GameContext";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import RolesPage from "./pages/RolesPage";
import AvatarSelectPage from "./pages/AvatarSelectPage";
import RoleSelectPage from "./pages/RoleSelectPage";
import BriefPage from "./pages/BriefPage";
import ChallengePage from "./pages/ChallengePage";
import ResultsPage from "./pages/ResultsPage";

export default function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="how-it-works" element={<HowItWorksPage />} />
            <Route path="roles" element={<RolesPage />} />
            <Route path="play">
              <Route path="avatar" element={<AvatarSelectPage />} />
              <Route path="role" element={<RoleSelectPage />} />
              <Route path="brief" element={<BriefPage />} />
              <Route path="challenge" element={<ChallengePage />} />
              <Route path="results" element={<ResultsPage />} />
              <Route index element={<Navigate to="avatar" replace />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GameProvider>
  );
}
