// Yeni sayfalar oluşturmak için react-router-dom 'u npm'le install ediyor ve app.js'e importluyorum
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Omer from "./components/boys/Omer"
import Cagri from "./components/boys/Cagri"
import Dogi from "./components/boys/Dogi"
import Yasir from "./components/boys/Yasir"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Omer />} />
          <Route path="/cagri" element={<Cagri />} />
          <Route path="/dogi" element={<Dogi />} />
          <Route path="/yasir" element={<Yasir />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  )
}
export default App
