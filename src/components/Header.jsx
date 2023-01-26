import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
function Header() {
  let link = [
    { name: "home", id: "123G" },
    { name: "about", id: "1344" },
    { name: "articles", id: "12367" },
    { name: "publish", id: "12388" },
  ];
  const [open, setOpen] = useState(false);
  const open_and_close = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="header">
      <div className="header__content">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul>
            {link.map((x) => (
              <Link key={x.id} className="link" to={`/${x.name}`}>
                <li style={{ textTransform: "capitalize" }}>{x.name}</li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      {/* mobile view */}
      <div onClick={open_and_close} className=" mobile">
        {open ? (
          <i class="fa-solid fa-rectangle-xmark"></i>
        ) : (
          <i class="fa-solid fa-bars"></i>
        )}
      </div>
      {open && (
        <div className="mobile_view">
          <ul>
            {link.map((x) => (
              <Link key={x.id} className="link" to={`/${x.name}`}>
                <li className="view_point" style={{ textTransform: "capitalize" }}>{x.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Header;
