import { Suspense, lazy } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
export default function App() {
  const Login = lazy(() => import("./pages/login"));
  const Home = lazy(() => import("./pages/home"));
  const NotFound = lazy(() => import("./pages/notFound"));
  return (
    <HashRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
