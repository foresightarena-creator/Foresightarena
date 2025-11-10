import { useState } from "react";

export default function Admin() {
  const [logs, setLogs] = useState([
    { id: 1, text: "🧠 AI Assistant ready." },
    { id: 2, text: "No security issues detected." },
    { id: 3, text: "0 user reports in last 24h." }
  ]);
  const [command, setCommand] = useState("");

  const handleCommand = (e) => {
    e.preventDefault();
    if (!command.trim()) return;
    setLogs([{ id: Date.now(), text: `🧩 Command sent: ${command}` }, ...logs]);
    setCommand("");
  };

  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 20px",
      background: "linear-gradient(180deg, #000, #111827)",
      minHeight: "100vh",
      color: "white",
      fontFamily: "sans-serif"
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Admin Dashboard</h1>
      <form onSubmit={handleCommand} style={{
        display: "flex",
        gap: "10px",
        width: "90%",
        maxWidth: "500px",
        marginBottom: "2rem"
      }}>
        <input
          type="text"
          placeholder="Enter command for AI assistant..."
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #444",
            background: "#111",
            color: "white"
          }}
        />
        <button type="submit" style={{
          background: "#4f46e5",
          border: "none",
          padding: "10px 16px",
          borderRadius: "8px",
          color: "white",
          fontWeight: "bold"
        }}>
          Send
        </button>
      </form>

      <section style={{ width: "90%", maxWidth: "500px" }}>
        <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>AI Reports</h2>
        {logs.map((log) => (
          <div key={log.id} style={{
            background: "#1e1b4b",
            padding: "10px",
            borderRadius: "8px",
            marginBottom: "10px"
          }}>
            <p>{log.text}</p>
          </div>
        ))}
      </section>

      <a href="/" style={{
        marginTop: "2rem",
        color: "#818cf8",
        textDecoration: "none"
      }}>← Back to Home</a>
    </main>
  );
}
