import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; 
import "./index.css";
import App from "./App.jsx";
// Unregister service workers in development mode
if (import.meta.env.DEV && 'serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(regs =>
    regs.forEach(reg => reg.unregister())
  );
}


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router> {/* wrap your app in Router */}
      <App />
    </Router>
  </StrictMode>
);
