import { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Dropdown,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";

import logo from "../assets/Vemtek-insurance-logo.jpeg";
import usa from "../assets/icons/usa.png";
import india from "../assets/icons/india.png";
import uk from "../assets/icons/uk.png";

import styles from "./Header.module.css";

function Header() {
  const [expanded, setExpanded] = useState(false);
  const [show, setShow] = useState(false);

  const [country, setCountry] = useState({
    name: "USA",
    flag: usa
  });

  const countries = [
    { name: "USA", flag: usa },
    { name: "India", flag: india },
    { name: "UK", flag: uk }
  ];

  const handleCountry = (c) => {
    setCountry(c);
  };

  return (
    <header>
      <Navbar
        expand="lg"
        expanded={expanded}
        fixed="top"
        className={`shadow-sm ${styles.navbar}`}
      >
        <Container fluid className="px-4">

          {/* LOGO */}
          <Navbar.Brand as={Link} to="/" className="ms-4">
            <img src={logo} alt="logo" className={styles.logo}  />
          </Navbar.Brand>

          {/* RIGHT SIDE (MOBILE + TABLET) */}
          <div className={`d-flex align-items-center gap-2 ${styles.mobileRight}`}>

            {/* COUNTRY */}
            <Dropdown>
              <Dropdown.Toggle className={styles.countryBtnMobileTop}>
                <img src={country.flag} alt="" className={styles.flag} />
                {country.name}
              </Dropdown.Toggle>

              <Dropdown.Menu className={styles.dropdownMenu}>
                {countries.map((c, i) => (
                  <Dropdown.Item
                    key={i}
                    className={styles.dropdownItem}
                    onClick={() => handleCountry(c)}
                  >
                    <img src={c.flag} alt="" className={styles.flag} />
                    {c.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            {/* LOGIN */}
            <Link to="/login">
              <Button className={styles.loginBtnMobileTop}>
                Login
              </Button>
            </Link>

            {/* TOGGLE */}
            <Navbar.Toggle
              onClick={() => setExpanded(!expanded)}
              className="border-0 ms-2"
            >
              {expanded ? <FaTimes size={24} /> : <HiBars3 size={24} />}
            </Navbar.Toggle>
          </div>

          {/* MENU */}
          <Navbar.Collapse>

            {/* NAV LINKS */}
            <Nav className={`mx-auto text-center ${styles.mobileMenu}`}>

              {["/", "/about", "/services", "/tools", "/contact"].map((path, i) => {
                const labels = ["Home", "About Us", "Services", "Tools & Resources", "Contact Us"];
                return (
                  <Nav.Link
                    key={i}
                    as={Link}
                    to={path}
                    className={styles.navLink}
                    onClick={() => setExpanded(false)}
                  >
                    {labels[i]}
                  </Nav.Link>
                );
              })}

            </Nav>

            {/* DESKTOP RIGHT */}
            <div className="d-none d-lg-flex align-items-center gap-3">

              <Dropdown
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                show={show}
              >
                <Dropdown.Toggle className={styles.countryBtn}>
                  <img src={country.flag} className={styles.flag} />
                  {country.name}
                </Dropdown.Toggle>

                <Dropdown.Menu className={styles.dropdownMenu}>
                  {countries.map((c, i) => (
                    <Dropdown.Item
                      key={i}
                      className={styles.dropdownItem}
                      onClick={() => handleCountry(c)}
                    >
                      <img src={c.flag} className={styles.flag} />
                      {c.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>

              <Link to="/login">
                <Button className={styles.loginBtn}>Login</Button>
              </Link>
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ marginTop: "75px" }}></div>
    </header>
  );
}

export default Header;