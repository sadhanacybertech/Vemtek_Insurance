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

        <Row className="gy-5 align-items-start">

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

            <div className={styles.socialWrap}>
              <span className={styles.socialTitle}>Connect With Us</span>

              <div className={styles.social}>
                <a
                  href="https://www.facebook.com/people/Vemtek-Insurance/61578522339554/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                >
                  <img src={facebook} alt="Facebook icon" />
                </a>

                <a
                  href="https://www.instagram.com/vemtekinsurance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram page"
                >
                  <img src={instagram} alt="Instagram icon" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our LinkedIn page"
                >
                  <img src={linkedin} alt="LinkedIn icon" />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Twitter page"
                >
                  <img src={twitter} alt="Twitter icon" />
                </a>
              </div>
            </div>
          </Col>

          {/* QUICK LINKS */}
          <Col lg={2} md={6}>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul className={styles.links}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>

          {/* SERVICES */}
          <Col lg={2} md={6}>
            <h3 className={styles.heading}>Our Services</h3>
            <ul className={styles.links}>
              <li>Life Insurance</li>
              <li>Health Insurance</li>
              <li>Medicare Plans</li>
              <li>Family Coverage</li>
            </ul>
          </Col>

          {/* POLICIES */}
          <Col lg={2} md={6}>
            <h3 className={styles.heading}>Policies</h3>
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
            <h3 className={styles.heading}>Contact Us</h3>

            <address className={styles.contactBox}>
              <p>
                <img src={location} alt="Location" />
                <span>
                  <strong>Registered Office:</strong><br />
                  Vemtek LLC, 7 White Deer Ct<br />
                  Huntington, New York, 11743
                </span>
              </p>

              <p>
                <img src={phone} alt="Phone" />
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();

                    const confirmCall = window.confirm(
                      "Calling this number will connect you with a licensed insurance agent.\nCalls may be recorded for quality and compliance purposes.\n\nDo you want to continue?"
                    );

                    if (confirmCall) {
                      window.location.href = "tel:+15165185065";
                    }
                  }}
                >
                  +1 516-518-5065
                </a>
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

          {/* <p className={styles.dev}>
            Developed by{" "}
            <a
              href="https://sadhanacybertech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sadhana Cybertech (OPC) Pvt. Ltd.
            </a>
          </p> */}
        </div>

        {/* ✅ Legal Entity */}
        <div className={styles.legal}>
          <p>
            Vemtek Insurance is operated by Vemtek LLC, a licensed insurance
            agency in the United States.
          </p>
        </div>

        {/* ✅ TPMO DISCLAIMER */}
        <div className={styles.tpmo}>
          <p>
            We do not offer every plan available in your area. Currently we represent 6 organizations which offer 25 products in your area. Please contact {" "}
            <a
              href="https://www.medicare.gov"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medicare.gov
            </a>
            , 1-800-MEDICARE, or your local State Health Insurance Program (SHIP)
            to get information on all of your options.
          </p>

          <p>
            Vemtek Insurance is a marketing brand of Vemtek LLC, a licensed insurance agency. This website is a solicitation for insurance.
          </p>
        </div>

      </Container>
    </footer>
  );
}

export default Footer;