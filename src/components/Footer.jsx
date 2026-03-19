import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

import styles from "./Footer.module.css";
import logo from "../assets/Vemtek-insurance-logo.jpeg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>

        <Row className="gy-4">

          {/* ABOUT */}
          <Col lg={4} md={6}>
            <div className={styles.logoBox}>
              <img src={logo} alt="logo" />
            </div>

            <p className={styles.text}>
              Vemtek Insurance provides trusted and reliable insurance
              solutions to protect your future and secure your life.
            </p>

            {/* SOCIAL */}
            <div className={styles.social}>
              <span><FaFacebookF /></span>
              <span><FaInstagram /></span>
              <span><FaLinkedinIn /></span>
            </div>
          </Col>

          {/* QUICK LINKS */}
          <Col lg={2} md={6}>
            <h5 className={styles.heading}>Quick Links</h5>
            <ul className={styles.links}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>

          {/* SERVICES */}
          <Col lg={3} md={6}>
            <h5 className={styles.heading}>Our Services</h5>
            <ul className={styles.links}>
              <li>Life Insurance</li>
              <li>Health Insurance</li>
              <li>Vehicle Insurance</li>
              <li>Business Insurance</li>
            </ul>
          </Col>

          {/* CONTACT */}
          <Col lg={3} md={6}>
            <h5 className={styles.heading}>Contact Us</h5>

            <p className={styles.contact}>
              <FaMapMarkerAlt /> Lucknow, India
            </p>

            <p className={styles.contact}>
              <FaPhoneAlt /> +91 8423811106
            </p>

            <p className={styles.contact}>
              <FaEnvelope /> info@vemtek.com
            </p>
          </Col>

        </Row>

        {/* BOTTOM */}
        <div className={styles.bottom}>
          © {new Date().getFullYear()} Vemtek Insurance. All rights reserved.
        </div>

      </Container>
    </footer>
  );
}

export default Footer;