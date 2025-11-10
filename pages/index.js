export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #0f172a, #1e1b4b)",
      color: "white",
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        🧠 Welcome to ForesightArena
      </h1>
      <p style={{ maxWidth: "600px", lineHeight: "1.6" }}>
        The future prediction platform where people share insights and compete to forecast world events.
      </p>
      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
        <a href="/login" style={buttonStyle}>Login</a>
        <a href="/predict" style={buttonStyle}>Make a Prediction</a>
        <a href="/admin" style={buttonStyle}>Admin Dashboard</a>
      </div>
    </main>
  );
}

const buttonStyle = {
  padding: "10px 18px",
  background: "#4f46e5",
  borderRadius: "8px",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};
