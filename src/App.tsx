import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import routeNames from "./routing/routs";
import AppLayout from "./app-layout/appLayout";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path={routeNames.PATH} element={<AppLayout />}>
          <Route
            path={routeNames.PATH}
            element={<Navigate to={routeNames.HOME} />}
          />
          <Route path={routeNames.HOME} element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
