import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import UploadImage from "./pages/UploadImage";
import UploadVideo from "./pages/UploadVideo";
import LiveCamera from "./pages/LiveCamera";
import History from "./pages/History";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import { ROUTES } from "./constants/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route
            path={ROUTES.HOME}
            element={<Home />}
          />

          <Route
            path={ROUTES.UPLOAD_IMAGE}
            element={<UploadImage />}
          />

          <Route
            path={ROUTES.UPLOAD_VIDEO}
            element={<UploadVideo />}
          />

          <Route
            path={ROUTES.LIVE_CAMERA}
            element={<LiveCamera />}
          />

          <Route
            path={ROUTES.HISTORY}
            element={<History />}
          />

          <Route
            path={ROUTES.ABOUT}
            element={<About />}
          />

        </Route>

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;