import { Link } from "react-router-dom";
import "./QuickActions.css";

const QuickActions = () => {
  return (
    <div className="quick-actions">

      <Link to="/upload-image">
        Upload Image
      </Link>

      <Link to="/upload-video">
        Upload Video
      </Link>

      <Link to="/live-camera">
        Live Camera
      </Link>

    </div>
  );
};

export default QuickActions;