import { Link } from "react-router-dom";
import styles from "./Services.module.css";
import { FaLayerGroup, FaPhoneAlt, FaUsers, FaHeadset, FaShieldAlt, FaCheckCircle, FaBook, FaShoppingCart, FaPlus, FaCalendarAlt, FaHandshake, FaTooth, FaLaptopMedical, FaCapsules, FaHeartbeat, FaBaby, FaDumbbell, FaPiggyBank, FaFileMedical, FaBalanceScale, FaDesktop, FaTablets, FaHeart } from "react-icons/fa";

function Services() {

  const services = [
    {
      icon: <FaCalendarAlt />,
      title: "Short-Term & Temporary Plans",
      desc: "Coverage for short periods to fill gaps between jobs or other insurance. Protect yourself with essential health benefits when you need them most."
    },
    {
      icon: <FaHandshake />,
      title: "Employer / Group Plans",
      desc: "Health insurance designed for businesses. Employees gain access to multiple plan options and affordable coverage through their employer."
    },
    {
      icon: <FaTooth />,
      title: "Dental & Vision Plans",
      desc: "Affordable dental and vision care. Covers checkups, treatments, and eyewear to help you maintain healthy teeth and clear vision."
    },
    {
      icon: <FaDesktop />,
      title: "Telemedicine & Virtual Care",
      desc: "Consult doctors online from home. Get prescriptions, advice, and care without visiting a clinic, saving time and effort."
    },
    {
      icon: <FaTablets />,
      title: "Prescription Drug Coverage",
      desc: "Helps you afford necessary medications. Covers prescriptions and simplifies refills while reducing out-of-pocket costs."
    },
    {
      icon: <FaCapsules />,
      title: "Chronic Care Management",
      desc: "Support for long-term conditions. Provides guidance and monitoring to manage illnesses and maintain better health."
    },
    {
      icon: <FaHeart />,
      title: "Mental Health",
      desc: "Access counseling, therapy, and resources to support emotional wellbeing and maintain a balanced life."
    },
    {
      icon: <FaBaby />,
      title: "Maternity Services",
      desc: "Comprehensive care for pregnancy and delivery. Covers prenatal, delivery, and postnatal services for a healthy start."
    },
    {
      icon: <FaDumbbell />,
      title: "Wellness & Preventive Programs",
      desc: "Programs to keep you healthy. Includes screenings, vaccinations, and coaching to prevent serious health issues."
    },
    {
      icon: <FaPiggyBank />,
      title: "Claims & Enrollment Support",
      desc: "Save pre-tax money for medical expenses. Manage healthcare costs efficiently with Health Savings or Flexible Spending Accounts."
    },
    {
      icon: <FaFileMedical />,
      title: "Claims & Enrollment Support",
      desc: "Get help with enrollment and filing claims. Our team ensures a smooth and stress-free insurance experience."
    },
    {
      icon: <FaBalanceScale />,
      title: "Plan Comparison Tools",
      desc: "Easily compare plans by benefits, features, and costs. Choose the insurance that best fits your needs."
    },
  ];
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>

          {/* HEADING */}
          <h1 className={styles.heading}>
            Comprehensive <span>Insurance Services</span>
          </h1>

          {/* SUBTEXT */}
          <p className={styles.subtext}>
            Explore Medicare, ACA Marketplace, Life & Final Expense plans along with essential
            supplemental services to protect every stage of life.
          </p>

          {/* BUTTONS */}
          <div className={styles.actions}>
            <button className={styles.primaryBtn}>
              <FaLayerGroup /> View Core Plans
            </button>

            <button
              type="button"
              className={styles.secondaryBtn}
              onClick={() => {
                if (typeof window !== "undefined") {
                  const confirmCall = window.confirm(
                    "Calling this number will connect you with a licensed insurance agent. Calls may be recorded for quality and compliance purposes.\n\nDo you want to continue?"
                  );

                  if (confirmCall) {
                    window.location.href = "tel:+15165185065";
                  }
                }
              }}
            >
              <FaPhoneAlt /> Get Expert Help
            </button>
          </div>

          {/* STATS */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <FaUsers />
              <div>
                <h4>5K+</h4>
                <p>Families Guided</p>
              </div>
            </div>

            <div className={styles.stat}>
              <FaHeadset />
              <div>
                <h4>24/7</h4>
                <p>Support Access</p>
              </div>
            </div>

            <div className={styles.stat}>
              <FaShieldAlt />
              <div>
                <h4>100%</h4>
                <p>Transparent</p>
              </div>
            </div>

            <div className={styles.stat}>
              <FaCheckCircle />
              <div>
                <h4>Top</h4>
                <p>Tier Guidance</p>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section className={styles.section}>
        <div className={styles.container}>

          {/* HEADING */}
          <div className={styles.heading}>
            <h2>Our Health Insurance Solutions</h2>
            <p>
              Everyone's needs are different. That's why we offer a variety of
              health insurance options designed to work for individuals, families,
              and seniors.
            </p>
          </div>

          {/* CARDS */}
          <div className={styles.grid}>

            {/* CARD 1 */}
            <div className={styles.card}>
              <div className={styles.icon}>
                <FaPlus />
              </div>
              <h4>Medicare Plans</h4>
              <p>
                Explore plans for seniors including Part B, Part D, and Medicare
                Advantage options.
              </p>
            </div>

            {/* CARD 2 */}
            <div className={styles.card}>
              <div className={styles.icon}>
                <FaShoppingCart />
              </div>
              <h4>ACA Marketplace Health Plans</h4>
              <p>
                Get affordable coverage through the ACA Marketplace with flexible
                options.
              </p>
            </div>

            {/* CARD 3 */}
            <div className={styles.card}>
              <div className={styles.icon}>
                <FaBook />
              </div>
              <h4>Life Insurance</h4>
              <p>
                Protect your loved ones financially with secure and reliable life
                insurance coverage tailored to your needs.
              </p>
            </div>

            {/* CARD 4 (UPDATED) */}
            <div className={styles.card}>
              <div className={styles.icon}>
                <FaHeartbeat />
              </div>
              <h4>Final Expense Insurance</h4>
              <p>
                Ease the financial burden on your family by covering funeral and
                end-of-life expenses with simple and affordable plans.
              </p>
            </div>

          </div>

        </div>
      </section>
      <section className={styles.wrapperr}>
        <div className={styles.container}>

          <div className={styles.headingg}>
            <h2 className={styles.titlee}>Additional Services</h2>
            <p className={styles.subtitlee}>
              Enhance your coverage with flexible add-on options.
            </p>
          </div>

          <div className={styles.gridd}>
            {services.map((item, i) => (
              <div className={styles.cardd} key={i}>

                <div className={styles.icons}>{item.icon}</div>

                <h4 className={styles.cardTitlee}>{item.title}</h4>

                <p className={styles.descc}>{item.desc}</p>

              </div>
            ))}
          </div>

        </div>
      </section>



      <section className={styles.wrapper}>
        <div className={styles.container}>

          <div className={styles.box}>

            {/* LEFT */}
            <div className={styles.left}>
              <h2>
                Ready to Secure Your <span>Health Coverage?</span>
              </h2>

              <p>
                The right health insurance can make all the difference. At
                <b> Vemtek Insurance</b>, we simplify the process and help you
                find a plan that truly works for you and your family.
              </p>

              {/* FEATURES */}
              <div className={styles.features}>
                <span><FaCheckCircle /> Trusted by 10,000+</span>
                <span><FaCheckCircle /> Expert Guidance</span>
                <span><FaCheckCircle /> No Hidden Fees</span>
              </div>
            </div>

            {/* RIGHT */}
            <div className={styles.right}>
              <Link to="/about" className={styles.primaryBtn}>
                More About Us
              </Link>
              <button
                className={styles.secondaryBtn}
                onClick={() => {
                  const confirmCall = window.confirm(
                    "Calling this number will connect you with a licensed insurance agent. \n Calls may be recorded for quality and compliance purposes.\n\nDo you want to continue?"
                  );

                  if (confirmCall) {
                    window.location.href = "tel:+15165185065";
                  }
                }}
              >
                <FaPhoneAlt /> Call Us Now
              </button>
            </div>

          </div>

        </div>
      </section>

    </>
  );
}

export default Services;