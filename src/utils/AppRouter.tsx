import { Navigate, Route, Routes } from "react-router-dom";
import Welcome from "../pages/welcome/Welcome";
import HomePage from "../pages/home/Home1";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Navigate replace to="welcome" />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="home" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
