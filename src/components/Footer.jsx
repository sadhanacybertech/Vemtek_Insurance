import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";
import instagram from "../assets/icons/instagram.svg";

import location from "../assets/icons/location.webp";
import mail from "../assets/icons/email.webp";
import phone from "../assets/icons/phone-call.webp";

import styles from "./Footer.module.css";
import logo from "../assets/Vemtek-insurance-logo.jpeg";

function Footer() {
  return (
    <footer className={styles.footer} >
      <Container>

        <Row className="gy-5">

          {/* ABOUT */}
          <Col lg={4} md={6}>
            <div className={styles.logoBox}>
              <img
                src={logo}
                alt="Vemtek Insurance Logo"
                loading="lazy"
              />
            </div>

            <p className={styles.text}>
              Vemtek Insurance provides trusted and reliable insurance
              solutions to protect your future and secure your life with
              confidence.
            </p>

            {/* SOCIAL */}
            <div className={styles.social}>
              <a href="#" aria-label="Facebook">
                <img src={facebook} alt="Facebook icon" />
              </a>

              <a href="#" aria-label="Instagram">
                <img src={instagram} alt="Instagram icon" />
              </a>

              <a href="#" aria-label="LinkedIn">
                <img src={linkedin} alt="LinkedIn icon" />
              </a>

              <a href="#" aria-label="Twitter">
                <img src={twitter} alt="Twitter icon" />
              </a>
            </div>
          </Col>

          {/* QUICK LINKS */}
          <Col lg={2} md={6}>
            <h5 className={styles.heading}>Quick Links</h5>

            <nav aria-label="Footer navigation">
              <ul className={styles.links}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </Col>

          {/* SERVICES */}
          <Col lg={3} md={6}>
            <h5 className={styles.heading}>Our Services</h5>

            <ul className={styles.links}>
              <li>Life Insurance</li>
              <li>Health Insurance</li>
              <li>Medicare Plans</li>
              <li>Family Coverage</li>
            </ul>
          </Col>

          {/* CONTACT */}
          <Col lg={3} md={6}>
            <h5 className={styles.heading}>Contact Us</h5>

            <address className={styles.contactBox}>
              
              <p>
                <img src={location} alt="Location icon" loading="lazy" />
                <span>Lucknow, India</span>
              </p>

              <p>
                <img src={phone} alt="Phone icon" loading="lazy" />
                <a href="tel:+918423811106">+91 8423811106</a>
              </p>

              <p>
                <img src={mail} alt="Email icon" loading="lazy" />
                <a href="mailto:info@vemtek.com">info@vemtek.com</a>
              </p>

            </address>
          </Col>

        </Row>

        {/* BOTTOM */}
        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Vemtek Insurance. All rights reserved.
          </p>

          <p className={styles.dev}>
            Developed by{" "}
            <a
              href="https://sadhanacybertech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sadhana Cybertech (OPC) Pvt. Ltd.
            </a>
          </p>
        </div>

      </Container>
    </footer>
  );
}

export default Footer;