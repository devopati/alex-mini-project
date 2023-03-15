import { BrowserRouter } from "react-router-dom";
import "./app.css";
import AppRoutes from "./components/AppRoutes";

import { AnimatePresence } from "framer-motion";
export function App() {
  return (
    <>
      <AnimatePresence>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
}
