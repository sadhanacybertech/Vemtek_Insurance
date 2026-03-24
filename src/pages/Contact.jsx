import styles from "./Contact.module.css";
import { FaPhoneAlt, FaClock, FaStar, FaEnvelope, FaUserTie, FaComments, FaUsers, FaHeadset } from "react-icons/fa";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { PiWarningBold } from "react-icons/pi";
import Frequently_Asked_Question from "../components/Frequently-Asked-Question";

function Contact() {

  return (
    <>
      <section className={styles.contactPage}>

        {/* HERO */}
        <div className={styles.hero}>
          <h1>We're Here to Help You</h1>

          <p>
            Get instant support from our licensed agents. Available 24/7 with
            fast response and expert guidance.
          </p>

          <div className={styles.actions}>
            <a href="tel:+1 516-518-5065" className={styles.primaryBtn}>
              <FaPhoneAlt /> Call Now
            </a>

            <button className={styles.secondaryBtn}>
              <HiChatBubbleLeftRight /> Start Live Chat
            </button>
          </div>
        </div>

        {/* INFO BAR */}
        <div className={styles.infoBar}>
          <div><span className={styles.dot}></span> We're Online Now!</div>
          <div><FaClock /> Monday - Friday: 8 AM - 8 PM</div>
          <div><FaStar /> 4.8/5 stars • 2,000+ reviews</div>
        </div>

        {/* URGENT BOX */}
        <div className={styles.urgent}>
          <h3><PiWarningBold /> Need Urgent Help?</h3>
          <p>
            Call us now: <a href="tel:+1 516-518-5065">+1 516-518-5065</a> – Available 24/7
          </p>
        </div>

      </section>





      <section className={styles.supportSection}>
        <div className={styles.container}>

          {/* HEADING */}
          <div className={styles.heading}>
            <h2>Choose Your Support Channel</h2>
            <p>Select the best way to reach us. We're ready to assist you!</p>
          </div>

          {/* GRID */}
          <div className={styles.grid}>

            {/* LIVE CHAT */}
            <div className={styles.card}>
              <span className={`${styles.badge} ${styles.green}`}>Online</span>
              <div className={styles.icon}><FaComments /></div>
              <h4>Live Chat</h4>
              <p>Average response: <b>2 mins</b></p>
              <button>Start Chat</button>
            </div>

            {/* PHONE */}
            <div className={styles.card}>
              <span className={`${styles.badge} ${styles.blue}`}>Available</span>
              <div className={styles.icon}><FaPhoneAlt /></div>
              <h4>Phone Support</h4>
              <a href="tel:+15165185065" style={{ textDecoration: "none" }}>
                <p><b>+1 516-518-5065</b></p>
                <button>Call Now</button>
              </a>
            </div>

            {/* AGENTS */}
            <div className={styles.card}>
              <span className={`${styles.badge} ${styles.dark}`}>Expert</span>
              <div className={styles.icon}><FaUserTie /></div>
              <h4>Licensed Agents</h4>
              <p>Professional guidance</p>
              <button>Get Help</button>
            </div>

            {/* EMAIL */}
            <div className={styles.card}>
              <span className={`${styles.badge} ${styles.sky}`}>24-48 hrs</span>
              <div className={styles.icon}><FaEnvelope /></div>
              <h4>Email Us</h4>
              <p>info@vemtek.com</p>
              <button>Email Now</button>
            </div>

          </div>

        </div>
      </section>




      <section className={styles.statsSection}>
        <div className={styles.container}>

          <div className={styles.statsGrid}>

            <div className={styles.statCard}>
              <div className={styles.icon}>
                <FaUsers />
              </div>
              <h3>10,000+</h3>
              <p>Customers Helped</p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.icon}>
                <FaClock />
              </div>
              <h3>&lt; 2 mins</h3>
              <p>Average Response Time</p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.icon}>
                <FaHeadset />
              </div>
              <h3>95%</h3>
              <p>First Contact Resolution</p>
            </div>

          </div>

        </div>
      </section>

      <Frequently_Asked_Question />

    </>
  );
}

export default Contact;