import "./Terminal.css";

const logs = [
  "Initializing AI Engine...",
  "Loading YOLOv8 Thermal Model...",
  "Camera Module Ready.",
  "Detection Engine Online.",
  "Waiting for User Input..."
];

const Terminal = () => {
  return (
    <section className="terminal">
      <h3>System Log</h3>

      {logs.map((log, index) => (
        <p key={index}>
          <span className="prompt">&gt;</span> {log}
        </p>
      ))}
    </section>
  );
};

export default Terminal;