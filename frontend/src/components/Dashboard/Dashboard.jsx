import "./Dashboard.css";

import StatusCard from "../StatusCard/StatusCard";
import CameraPreview from "../CameraPreview/CameraPreview";
import Terminal from "../Terminal/Terminal";

const Dashboard = () => {
  return (
    <>

      <section className="dashboard">

        <StatusCard title="AI Status" value="ONLINE" />

        <StatusCard title="Model" value="YOLOv8 Thermal" />

        <StatusCard title="Camera" value="READY" />

        <StatusCard title="Today's Detections" value="0" />

      </section>

      <section className="dashboard-bottom">

        <CameraPreview />

        <Terminal />

      </section>

    </>
  );
};

export default Dashboard;