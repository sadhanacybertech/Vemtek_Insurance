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
    <footer className={styles.footer}>
      <Container>

        <Row className="gy-5">

          {/* ABOUT */}
          <Col lg={3} md={6}>
            <div className={styles.logoBox}>
              <img src={logo} alt="Vemtek Insurance Logo" loading="lazy" />
            </div>

            <p className={styles.text}>
              Vemtek Insurance provides trusted and reliable insurance
              solutions to protect your future and secure your life with
              confidence.
            </p>

            {/* SOCIAL */}
             <strong className="text-muted" style={{fontSize:"14px"}}>Connect With Us:</strong>
            <div className={styles.social}>
             
              <a href="#"><img src={facebook} alt="Facebook" /></a>
              <a href="#"><img src={instagram} alt="Instagram" /></a>
              <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
              <a href="#"><img src={twitter} alt="Twitter" /></a>
            </div>
          </Col>

          {/* QUICK LINKS */}
          <Col lg={2} md={6}>
            <h5 className={styles.heading}>Quick Links</h5>
            <ul className={styles.links}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>

          {/* SERVICES */}
          <Col lg={2} md={6}>
            <h5 className={styles.heading}>Our Services</h5>
            <ul className={styles.links}>
              <li>Life Insurance</li>
              <li>Health Insurance</li>
              <li>Medicare Plans</li>
              <li>Family Coverage</li>
            </ul>
          </Col>

          {/* ✅ NEW POLICIES SECTION */}
          <Col lg={2} md={6}>
            <h5 className={styles.heading}>Policies</h5>
            <ul className={styles.links}>
              <li><Link to="/termscondition">Terms of Use</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/HIPPA-Notice">HIPPA Notice</Link></li>
              <li><Link to="/Legal-Notice">Legal Notice</Link></li>
              <li><Link to="/Non-Descrimination-notice">Non-Discrimination Notice</Link></li>
            </ul>
          </Col>

          {/* CONTACT */}
          <Col lg={3} md={6}>
            <h5 className={styles.heading}>Contact Us</h5>

            <address className={styles.contactBox}>
              <p>
                <img src={location} alt="Location" />
                <span>
                  <strong>Regitered Office:</strong> <br />
                  Vemtek LLC, 7 White Deer Ct
                  Huntington, New York, 11743
                </span>
              </p>

              <p>
                <img src={phone} alt="Phone" />
                <a href="tel:+15165185065">+1 516-518-5065</a>
              </p>

              <p>
                <img src={mail} alt="Email" />
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