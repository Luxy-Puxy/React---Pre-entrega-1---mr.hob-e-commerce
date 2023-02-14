import  Cartwidget from "../CartWidget/Cartwidget";

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        mr. Hob
      </a>
      <ul>
        <li>
          <a href="/My Account">My Account</a>
        </li>
        <li>
          <a href="/Products">Products</a>
        </li>
        <li>
          <a href="/Cart">
            <Cartwidget />
          </a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}


