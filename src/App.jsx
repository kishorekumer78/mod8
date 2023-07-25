import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ExpenseTrackingPage from "./pages/ExpenseTrackingPage.jsx";
import IncomeTrackingPage from "./pages/IncomeTrackingPage.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/expense" element={<ExpenseTrackingPage />} />
          <Route path="/income" element={<IncomeTrackingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
