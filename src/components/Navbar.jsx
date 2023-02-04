import { useNavigate } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate()
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <img
              src="../images/omer-img.jpeg"
              width="36px"
              height="36px"
              alt="Ömer"
            />
            <p>Ömer</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/cagri")}>
            <img
              src="../images/cagrı-img.jpeg"
              width="36px"
              height="36px"
              alt="Çağrı"
            />
            <p>Çağrı</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/dogi")}>
            <img
              src="../images/dogi-img.jpeg"
              width="36px"
              height="36px"
              alt="Doğukan"
            />
            <p>Doğukan</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/yasir")}>
            <img
              src="../images/yasir-img.jpeg"
              width="36px"
              height="36px"
              alt="Yasir"
            />
            <p>Yasir</p>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Navbar
