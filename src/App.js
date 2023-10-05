import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
      </Routes>
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <Write /> */}
      {/* <Settings /> */}
      {/* <Login /> */}
      {/* <Register /> */}
    </BrowserRouter>
  );
}

export default App;
