import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Profile from "./Components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

