import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./components/Main";
import { Login } from "./components/Login";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
