import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "./components/ui/provider.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="education" element={<Education />} />
            <Route path="experience" element={<Experience />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
