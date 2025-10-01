import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../store/cart";

export default function NavBar() {
  const count = useCart((s) => s.count());
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          PokeShop
        </Link>
        <div className="links">
          <NavLink to="/" className="link">
            Sklep
          </NavLink>
          <NavLink to="/cart" className="link">
            Koszyk <span className="badge">{count}</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
