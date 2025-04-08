import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import User from "./pages/User";


function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/users" />} />
          <Route path="/users" element={<User />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
