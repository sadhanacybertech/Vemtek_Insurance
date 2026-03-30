import { Link } from "react-router-dom";
import styles from "./Services.module.css";
import { FaLayerGroup, FaPhoneAlt, FaUsers, FaHeadset, FaShieldAlt, FaCheckCircle, FaBook, FaShoppingCart, FaPlus, FaCalendarAlt, FaHandshake, FaTooth, FaLaptopMedical, FaCapsules, FaHeartbeat, FaBaby, FaDumbbell, FaPiggyBank, FaFileMedical, FaBalanceScale, FaDesktop, FaTablets, FaHeart } from "react-icons/fa";
import SEO from "../components/SEO";
import medicareImg from "../assets/medicare-insurance.jpg";
import acaImg from "../assets/ACAPlans.webp";
import lifeImg from "../assets/life-insurance.jpeg";
import finalexpenseImg from "../assets/final-expence-insurance.webp";
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

      <SEO
        title="Health Insurance Services | Vemtek"
        description="Plan comparison, claim support, and expert insurance guidance."
        url="https://vemtek-insurance.onrender.com/services"
      />

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

      <section className={`${styles.sectionn} border-top border-bottom`}>
        <div className="container">

          {/* HEADING */}
          <div className={styles.headingg}>
            <h2>Our Health Insurance Solutions</h2>
            <p>
              Everyone's needs are different. That's why we offer a variety of
              health insurance options designed to work for individuals, families,
              and seniors.
            </p>
          </div>

          {/* CONTENT */}
          <div className="row align-items-center justify-content-center mt-5">


            {/* RIGHT CONTENT */}
            <div className="col-lg-5">
              <div className={styles.contentt}>

                <span className={styles.badgee}>Medicare Plans</span>

                <h3 className={styles.medicare}>
                  Comprehensive Medicare Coverage
                </h3>

                <p className={styles.description}>
                  Explore Medicare plans designed for seniors, including
                  Part B for medical services, Part D for prescription drugs,
                  and Medicare Advantage for comprehensive coverage. Compare
                  benefits, receive expert guidance, and choose
                  a plan that suits your healthcare needs, lifestyle, and budget
                  with an easy, stress-free enrollment process.
                </p>

                <button className={styles.btn}>
                  Explore Medicare Plans →
                </button>

              </div>
            </div>



            {/* LEFT IMAGE */}
            <div className="col-lg-6 text-center mb-4 mb-lg-0">
              <div className={styles.imageWrapperr}>
                <img
                  src={medicareImg}
                  alt="Medicare plans"
                  className="img-fluid"
                />
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* ACA Marketplace  */}
      <section className={`${styles.acaModern} border-top border-bottom`}>
        <div className="container">
          <div className="row align-items-center">

            {/* RIGHT IMAGE */}
            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <div className={styles.acaImageWrapper}>
                <img src={acaImg} alt="ACA Plans" />
              </div>
            </div>

            {/* LEFT CONTENT */}
            <div className="col-lg-6">
              <div className={styles.acaContentBox}>

                <span className={styles.acaBadge}>ACA Marketplace</span>

                <h2>
                  Affordable Health Coverage <br /> for Everyone
                </h2>

                <p>
                  ACA Marketplace plans offer essential health benefits,
                  preventive care, and financial assistance options. Choose
                  flexible coverage designed for individuals and families
                  with transparent pricing and easy enrollment.
                </p>

                <button className={styles.acaBtn}>
                  Explore ACA Plans →
                </button>

              </div>
            </div>



          </div>
        </div>
      </section>



      {/* Life Insurance  */}
      <section className={`${styles.lifeHero} border-top border-bottom`}>
        <div className="container">
          <div className="row align-items-center">

            {/* LEFT CONTENT */}
            <div className="col-lg-6">

              <span className={styles.lifeBadge}>Life Insurance</span>

              <h2 className={styles.lifeTitle}>
                Secure Your Family’s Future
              </h2>

              <p className={styles.lifeDesc}>
                Life insurance ensures financial protection for your loved ones
                by providing long-term security, income replacement, and support
                during uncertain times. Choose flexible plans designed to match
                your financial goals and safeguard your family’s future.
              </p>

              <button className={styles.lifeBtn}>
                Explore Life Plans →
              </button>

            </div>


            {/* RIGHT IMAGE */}
            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <div className={styles.lifeImgBox}>
                <img src={lifeImg} alt="Life Insurance" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final Expense Insurance   */}
      <section className={`${styles.acaModern} border-top border-bottom`}>
        <div className="container">
          <div className="row align-items-center">

            {/* RIGHT IMAGE */}
            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <div className={styles.acaImageWrapper}>
                <img src={finalexpenseImg} alt="Final Expense Insurance" />
              </div>
            </div>

            {/* LEFT CONTENT */}
            <div className="col-lg-6">
              <div className={styles.acaContentBox}>

                <span className={styles.acaBadge}>Final Expense Insurance</span>

                <h2>
                  Affordable Final Expense Coverage for Peace of Mind
                </h2>

                <p>
                  Final expense insurance helps cover end-of-life costs such as funeral
                  expenses, medical bills, and outstanding debts. It ensures your loved
                  ones are not burdened financially during difficult times, with simple
                  plans, affordable premiums, and quick approval.
                </p>

                <button className={styles.acaBtn}>
                  Explore Final Expense Plans →
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>


      <section className={`${styles.wrapperr} border-top border-bottom`}>
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