import React, { useState, useEffect } from "react";
import axios from "axios";

function SignalCard() {
  const [signal, setSignal] = useState("Caricamento...");

  useEffect(() => {
    // Cambia con l'URL del tuo backend su Render
    axios.get("https://tuo-backend.onrender.com/signal")
      .then(res => setSignal(res.data.signal))
      .catch(err => setSignal("Errore nel recupero del segnale"));
  }, []);

  return (
    <div style={{
      margin: "30px auto",
      padding: "25px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      maxWidth: "400px",
      textAlign: "center",
      backgroundColor: "#fff",
      boxShadow: "0px 2px 8px rgba(0,0,0,0.1)"
    }}>
      <h2>Segnale Attuale</h2>
      <p style={{ fontSize: "1.5em", fontWeight: "bold" }}>{signal}</p>
    </div>
  );
}

export default SignalCard;