import { Link, useLocation } from "react-router-dom";
import styles from "./Services.module.css";
import { FaLayerGroup, FaPhoneAlt, FaUsers, FaHeadset, FaShieldAlt, FaCheckCircle, FaBook, FaShoppingCart, FaPlus, FaCalendarAlt, FaHandshake, FaTooth, FaLaptopMedical, FaCapsules, FaHeartbeat, FaBaby, FaDumbbell, FaPiggyBank, FaFileMedical, FaBalanceScale, FaDesktop, FaTablets, FaHeart, FaStar } from "react-icons/fa";
import SEO from "../components/SEO";
import medicareImg from "../assets/medicare-insurance.jpg";
import acaImg from "../assets/ACAPlans.webp";
import lifeImg from "../assets/life-insurance.jpeg";
import finalexpenseImg from "../assets/final-expence-insurance.webp";
import healthImg from "../assets/health-insurance.webp";
import { useEffect } from "react";
function Services() {

  const location = useLocation();

  useEffect(() => {
    // disable browser auto jump restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (location.hash) {
      const id = location.hash;

      // 🔥 stop instant jump
      window.scrollTo(0, 0);

      const timer = setTimeout(() => {
        const el = document.querySelector(id);

        if (el) {
          const yOffset = -80; // navbar height adjust
          const y =
            el.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;

          window.scrollTo({
            top: y,
            behavior: "smooth",
          });
        }
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [location]);

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


      {/* Our Health Insurance Solutions   */}
      <section className={`${styles.sectionn} border-top border-bottom`} id="medicare">
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
          <div className="row align-items-center justify-content-center">


            {/* RIGHT CONTENT */}
            <div className="col-lg-5">
              <div className={styles.contentt}>

                <span className={styles.badgee}>Medicare Plans</span>

                <h3 className={styles.medicare}>
                  Comprehensive Medicare Coverage
                </h3>

                <p className={styles.description}>
                  Choosing the right Medicare plan can make a significant difference in
                  both your healthcare coverage and out-of-pocket costs. With multiple
                  parts covering hospital stays, medical services, and prescription
                  drugs Medicare can quickly become confusing, especially when considering
                  supplemental or advantage plans.
                  <br /> <br />

                  Missing the right coverage could lead
                  to gaps that result in unexpected expenses over time. Vemtek Insurance
                  helps simplify this process by clearly explaining your options, comparing plans,
                  and guiding you toward coverage that fits your healthcare needs, preferred doctors,
                  and budget so you can feel confident in your decisions.
                </p>

                {/* <button className={styles.btn}>
                  Explore Medicare Plans →
                </button> */}



                <div className={` ${styles.badges} my-5`}>
                  <div className={styles.badgeItem}>
                    <FaShieldAlt className={styles.icon} />
                    <span>Medicare Experts</span>
                  </div>

                  <div className={styles.badgeItem}>
                    <FaStar className={styles.icon} />
                    <span>Top-Rated Plans</span>
                  </div>

                  <div className={styles.badgeItem}>
                    <FaUsers className={styles.icon} />
                    <span>Trusted by Seniors</span>
                  </div>
                </div>

              </div>
            </div>



            {/* LEFT IMAGE */}
            <div className="col-lg-6 text-center mb-4 mb-lg-0">
              <div className={styles.imageWrapperr}>
                <span className={styles.circle1}></span>
                <span className={styles.circle2}></span>

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
      <section className={`${styles.acaModern} border-top border-bottom`} id="aca">
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

                <span className={`badge ${styles.acaBadge} my-3`}>ACA Marketplace</span>

                <h2>
                  Affordable Health Coverage for Everyone
                </h2>

                <p>
                  The ACA Marketplace offers access to comprehensive health insurance
                  plans that include essential benefits such as preventive care,
                  hospitalization, maternity services, and prescription coverage.
                  One of its biggest advantages is the availability of financial
                  assistance, which can significantly lower monthly premiums and
                  out-of-pocket costs based on your income and household size.
                  <br /> <br />
                  However, understanding eligibility requirements, enrollment
                  periods, and plan differences can be challenging without
                  proper guidance. Vemtek Insurance helps you navigate the
                  entire process from checking subsidy eligibility
                  to comparing plans so you can confidently choose coverage that
                  meets your healthcare needs while maximizing your savings.
                </p>

                {/* <button className={styles.acaBtn}>
                  Explore ACA Plans →
                </button> */}

                <div className={` ${styles.badges} mt-3`}>
                  <div className={styles.badgeItem}>
                    <FaShieldAlt className={styles.icon} />
                    <span>ACA Experts</span>
                  </div>

                  <div className={styles.badgeItem}>
                    <FaStar className={styles.icon} />
                    <span>Affordable Plans</span>
                  </div>

                  <div className={styles.badgeItem}>
                    <FaUsers className={styles.icon} />
                    <span>Financial Assistance Available</span>
                  </div>
                </div>

              </div>
            </div>



          </div>
        </div>
      </section>



      {/* Life Insurance  */}
      <section className={`${styles.lifeHero} border-top border-bottom`} id="lifeinsurance">
        <div className="container">
          <div className="row align-items-center">

            {/* LEFT CONTENT */}
            <div className="col-lg-6">

              <span className={styles.lifeBadge}>Life Insurance</span>

              <h2 className={styles.lifeTitle}>
                Secure Your Family’s Future
              </h2>

              <p className={styles.lifeDesc}>
                Life insurance is one of the most important steps you can take to protect
                your family’s financial future. It helps cover income loss, outstanding
                debts, mortgage payments, and everyday living expenses so your loved
                ones stay financially secure no matter what happens. Beyond immediate
                protection, the right life insurance plan can also support long-term
                goals like funding your child’s education or maintaining your family’s
                lifestyle.
                <br /> <br />
                At Vemtek Insurance, we make it simple to compare flexible
                term and permanent life insurance
                options tailored to your needs, helping you choose coverage that aligns
                with both your current situation and future plans without unnecessary complexity.
              </p>

              {/* <button className={styles.lifeBtn}>
                Explore Life Plans →
              </button> */}

              <div className={` ${styles.badges} mt-3`}>
                <div className={styles.badgeItem}>
                  <FaShieldAlt className={styles.icon} />
                  <span>Trusted Life Experts</span>
                </div>

                <div className={styles.badgeItem}>
                  <FaStar className={styles.icon} />
                  <span>Affordable Coverage</span>
                </div>

                <div className={styles.badgeItem}>
                  <FaUsers className={styles.icon} />
                  <span>Secure Your Family’s Future</span>
                </div>
              </div>


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
      <section className={`${styles.acaModern} border-top border-bottom`} id="finalexpense">
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

                <span className={`badge ${styles.acaBadge} my-3`}>Final Expense Insurance</span>

                <h2>
                  Affordable Final Expense Coverage for Peace of Mind
                </h2>

                <p>
                  Final expense insurance is designed to provide financial relief to your
                  loved ones during a difficult and emotional time. It helps cover funeral
                  costs, burial expenses, medical bills, and other end-of-life obligations
                  that can otherwise place a sudden financial burden on your family. Unlike
                  more complex policies, final expense plans are typically straightforward,
                  with smaller coverage amounts, simplified underwriting, and faster
                  approvals.
                  <br /> <br />
                  Vemtek Insurance offers dependable and easy-to-understand options
                  that allow you to plan ahead responsibly, ensuring your family is protected from
                  unexpected financial stress while honoring your wishes.
                </p>

                {/* <button className={styles.acaBtn}>
                  Explore Final Expense Plans →
                </button> */}

                <div className={` ${styles.badges} mt-3`}>
                  <div className={styles.badgeItem}>
                    <FaShieldAlt className={styles.icon} />
                    <span>Final Expense Experts</span>
                  </div>

                  <div className={styles.badgeItem}>
                    <FaStar className={styles.icon} />
                    <span>Affordable Coverage</span>
                  </div>

                  <div className={styles.badgeItem}>
                    <FaUsers className={styles.icon} />
                    <span>Peace of Mind Protection</span>
                  </div>
                </div>


              </div>
            </div>

          </div>
        </div>
      </section>



      {/* health insurance services section */}

      <section className={styles.healthsection}>
        <div className="container">
          <div className={styles.row}>

            {/* LEFT CONTENT */}
            <div className={styles.healthcontent}>

              <span className={styles.healthbadge}>Health Insurance</span>

              <h2>
                Protect Your Health & Your Future
              </h2>

              <p>
                Health insurance is essential not only for emergencies but also for
                managing your overall well-being through preventive care, regular
                checkups, and early treatment. Without the right coverage, even routine
                medical needs can become financially overwhelming. A well-structured
                plan protects you from high medical bills while ensuring access to a
                wide network of healthcare providers and services.
              </p>

              <p>
                With Vemtek Insurance,
                you can explore a range of affordable health insurance options designed to
                balance premiums, deductibles, and benefits helping you find a plan that
                supports both your health and financial stability over the long term.
              </p>

              {/* <button className={styles.healthbtn}>
                Explore Health Plans →
              </button> */}

              {/* BADGES */}
              <div className={styles.healthbadges}>
                <div><FaShieldAlt /> Trusted Experts</div>
                <div><FaStar /> Affordable Plans</div>
                <div><FaHeartbeat /> Complete Coverage</div>
              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className={styles.healthimageWrapper}>
              <span></span>
              <span></span>

              <div className={styles.healthimageBox}>
                <img src={healthImg} alt="Health Insurance" />
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