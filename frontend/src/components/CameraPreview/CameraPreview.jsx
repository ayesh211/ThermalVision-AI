import "./CameraPreview.css";

const CameraPreview = () => {
  return (
    <div className="camera-preview">

      <div className="camera-header">
        Live Camera Preview
      </div>

      <div className="camera-box">

        <div className="camera-placeholder">

          📷

          <p>No Live Stream</p>

        </div>

      </div>

    </div>
  );
};

export default CameraPreview;