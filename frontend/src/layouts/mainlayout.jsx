import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import AnimatedBackground from "../components/Background/AnimatedBackground";

const MainLayout = () => {
  return (
    <>
      <AnimatedBackground />
      <Navbar />

      <main
        style={{
          padding: "30px",
          minHeight: "calc(100vh - 90px)",
        }}
      >
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;