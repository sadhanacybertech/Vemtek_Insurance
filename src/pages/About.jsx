import styles from "./About.module.css";
import { FaAward, FaBullseye, FaCheckCircle, FaChevronDown, FaEye, FaHeart, FaPhoneAlt, FaRocket, FaShieldAlt } from "react-icons/fa";
import medicareImg from "../assets/about.jpg";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { GiCheckMark } from "react-icons/gi";
function About() {

     const values = [
    {
      icon: <FaShieldAlt />,
      title: "Integrity",
      desc: "We operate with honesty and transparency, ensuring every recommendation is in your best interest."
    },
    {
      icon: <FaHeart />,
      title: "Compassion",
      desc: "We treat every client with empathy and care, understanding their unique needs."
    },
    {
      icon: <FaAward />,
      title: "Excellence",
      desc: "We strive for the highest standards in service delivery and customer experience."
    },
    {
      icon: <FaRocket />,
      title: "Innovation",
      desc: "We embrace new technologies to make insurance simpler and more accessible."
    }
  ];

  return (
  <>
        <section className={styles.hero}>

      {/* CONTENT */}
      <div className={styles.content}>
        <h1>Care Beyond Coverage</h1>

        <div className={styles.line}></div>

        <button className={styles.cta}>
          A Team That Cares
        </button>
      </div>

      {/* SCROLL ICON */}
      <div className={styles.scroll}>
        <FaChevronDown />
      </div>

    </section>



     <section className={styles.mvWrapper}>
      <div className={styles.container}>

        {/* HEADING */}
        <div className={styles.heading}>
          <h2>Our Mission & Vision</h2>
          <p>
            Dedicated to simplifying insurance and helping you make confident,
            informed decisions for a secure future.
          </p>
        </div>

        {/* CONTENT */}
        <div className={styles.mvGrid}>

          {/* LEFT - MISSION */}
          <div className={styles.mvBox}>
            <div className={styles.iconBox}>
              <FaBullseye />
            </div>

            <h3>Our Mission</h3>

            <p>
              We aim to provide transparent, reliable, and personalized
              insurance solutions that empower individuals and families.
            </p>

            <ul>
              <li><FaCheckCircle /> Simple & clear process</li>
              <li><FaCheckCircle /> Affordable coverage</li>
              <li><FaCheckCircle /> Expert guidance</li>
              <li><FaCheckCircle /> Customer-first approach</li>
            </ul>
          </div>

          {/* RIGHT - VISION */}
          <div className={styles.mvBox}>
            <div className={styles.iconBox}>
              <FaEye />
            </div>

            <h3>Our Vision</h3>

            <p>
              To become a trusted leader in insurance by delivering innovative,
              transparent, and customer-focused solutions.
            </p>

            <ul>
              <li><FaCheckCircle /> Innovative solutions</li>
              <li><FaCheckCircle /> Transparency & trust</li>
              <li><FaCheckCircle /> Long-term relationships</li>
              <li><FaCheckCircle /> Confidence in decisions</li>
            </ul>
          </div>

        </div>

      </div>
    </section>



    <section className={styles.valuesSection}>
      <div className={styles.container}>

        {/* HEADING */}
        <div className={styles.heading}>
          <h2>Our Core Values</h2>
          <p>
            These principles define who we are and guide everything we do to
            support your journey.
          </p>
        </div>

        {/* GRID */}
        <div className={styles.valuesGrid}>
          {values.map((item, i) => (
            <div key={i} className={styles.valueCard}>

              <div className={styles.iconBox}>
                {item.icon}
              </div>

              <h4>{item.title}</h4>
              <p>{item.desc}</p>

            </div>
          ))}
        </div>

      </div>
    </section>





      <section className={styles.medicareSection}>
      <div className={styles.container}>

        <div className={styles.grid}>

          {/* LEFT CONTENT */}
          <div className={styles.content}>
            <h2>About Vemtek Insurance</h2>

            <p>
              At <b>Vemtek Insurance</b>, we specialize in providing reliable and
              personalized health insurance solutions designed to protect you and
              your loved ones. Our goal is to simplify complex insurance processes
              and help you make confident, informed decisions.
            </p>

            <p>
              From Medicare plans to comprehensive family coverage, we ensure you
              get access to the right benefits—whether it's hospital care, doctor
              visits, preventive services, or prescription support. With expert
              guidance and transparent advice, we are committed to securing your
              health and financial future.
            </p>

            <p>
              Trusted by clients for our integrity and customer-first approach,
              Vemtek Insurance is your partner in building a safer, healthier
              tomorrow.
            </p>

            <button className={styles.btn}>
              Explore Our Plans →
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.imageBox}>
            <img src={medicareImg} alt="Vemtek Insurance Services" />
          </div>

        </div>

      </div>
    </section>





     <section className={styles.ctaSection}>
      <div className={styles.container}>

        <div className={styles.ctaBox}>

          {/* LEFT CONTENT */}
          <div className={styles.ctaContent}>
            <h2>Protect What Matters Most</h2>

            <p>
              With <b>Vemtek Insurance</b>, get expert guidance and choose the
              right health and Medicare plans tailored to your needs. We make
              insurance simple, transparent, and stress-free.
            </p>

            {/* TRUST POINTS */}
            <div className={styles.ctaFeatures}>
              <span><GiCheckMark /> Trusted Advisors</span>
              <span><GiCheckMark /> Personalized Coverage</span>
              <span><GiCheckMark /> Quick & Easy Process</span>
            </div>

            {/* SMALL TRUST NOTE */}
            <p className={styles.smallNote}>
              No hidden charges • 100% confidential • Fast support
            </p>
          </div>

          {/* RIGHT ACTIONS */}
          <div className={styles.ctaActions}>

            <Link to="/contact" className="text-decoration-none">
              <button className={styles.primaryBtn}>
                <HiOutlineCalendarDays /> Get Free Consultation
              </button>
            </Link>

            <a href="tel:+1 516-518-5065" className="text-decoration-none">
              <button className={styles.secondaryBtn}>
                <FaPhoneAlt /> Call an Expert
              </button>
            </a>

          </div>

        </div>

      </div>
    </section>


  </>
  );
}

export default About;