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
    <div>

    
      {/* ================= HEADER ================= */}
      <header>
        <Navbar
          expand="lg"
          expanded={expanded}
          fixed="top"
          className={`shadow-sm border border-bottom  ${styles.navbar}`}
        >
          <Container className="px-4">

            {/* LOGO */}
            <Navbar.Brand as={Link} to="/" className="ms-2">
              <img src={logo} alt="logo" className={styles.logo} />
            </Navbar.Brand>

            {/* MOBILE RIGHT */}
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

              {/* CONTACT */}
              <Link to="/contact">
                <Button className={styles.loginBtnMobileTop}>
                  Contact
                </Button>
              </Link>

              {/* TOGGLE */}
              <Navbar.Toggle
                onClick={() => setExpanded(!expanded)}
                className="border-0"
              >
                {expanded ? <FaTimes size={24} /> : <HiBars3 size={24} />}
              </Navbar.Toggle>
            </div>

            {/* MENU */}
            <Navbar.Collapse>

              {/* NAV LINKS */}
              <Nav className={`mx-auto text-center ${styles.mobileMenu}`}>
                {["/", "/about", "/services", "/contact"].map((path, i) => {
                  const labels = ["Home", "About Us", "Services", "Contact Us"];
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

                <Link to="/contact">
                  <Button className={styles.loginBtn}>Contact</Button>
                </Link>
              </div>

            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* 🔥 SPACING FIX */}
        <div className={styles.headerSpace}></div>
      </header>


      
  <div className={styles.topBar}>
        <a href="/contact" className={styles.topBarLink}>
          <div className={styles.marquee}>
            <div className={styles.track}>

              <span>
                 Secure Your Future with Vemtek Insurance •
                Expert Guidance | Tailored Coverage Plans •
                +1 516-518-5065 • Get a Free Consultation •
              </span>

             

            </div>
          </div>
        </a>
      </div>

    </div>
  );
}

export default Header;