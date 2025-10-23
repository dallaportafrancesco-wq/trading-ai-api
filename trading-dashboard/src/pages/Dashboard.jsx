import React from "react";
import Navbar from "../components/Navbar";
import SignalCard from "../components/SignalCard";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <SignalCard />
      <Footer />
    </div>
  );
}

export default Dashboard;