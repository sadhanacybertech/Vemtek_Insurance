import styles from "./Home.module.css";
import heroImg from "../assets/hero-img.webp";
import shields from "../assets/floating-shields.png";
import { FaBook, FaChartLine, FaCheckCircle, FaClipboardList, FaHeadset, FaHeart, FaHeartbeat, FaPhoneAlt, FaPlus, FaSearch, FaShieldAlt, FaShoppingCart, FaUserCog, FaUsers, FaWallet } from "react-icons/fa";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Frequently_Asked_Question from "../components/Frequently-Asked-Question";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SEO from "../components/SEO";
import ScrollToTop from "../components/ScrollToTop";
function Home() {

  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(link);
  };

  const handleQuote = () => {
    navigate("/contact");
  };

  const healthIns = [
    {
      icon: <FaPlus />,
      title: "Medicare Plans",
      desc: "Find the right coverage for seniors with Medicare Part B, Part D, and Medicare Advantage plans tailored to your healthcare needs.",
      link: "/services#medicare",
    },
    {
      icon: <FaShoppingCart />,
      title: "ACA Marketplace Plans",
      desc: "Access affordable health insurance through ACA Marketplace plans with essential benefits, preventive care, and financial assistance.",
      link: "/services#aca",
    },
    {
      icon: <FaBook />,
      title: "Life Insurance",
      desc: "Protect your family’s financial future with flexible life insurance plans designed to cover income loss, debts, and long-term needs.",
      link: "/services#lifeinsurance",
    },
    {
      icon: <FaHeartbeat />,
      title: "Final Expense Insurance",
      desc: "Cover funeral costs, medical bills, and end-of-life expenses with simple, affordable plans that ease the financial burden on your loved ones.",
      link: "/services#finalexpense",
    },
  ];


  const data = [
    {
      icon: <FaShieldAlt />,
      title: "Financial Protection",
      desc: "Shields you from unexpected high medical costs and financial risks."
    },
    {
      icon: <FaHeart />,
      title: "Peace of Mind",
      desc: "Stay worry-free knowing you are protected in uncertain situations."
    },
    {
      icon: <FaUsers />,
      title: "Family Coverage",
      desc: "Ensure your loved ones receive the best care when needed."
    },
    {
      icon: <FaChartLine />,
      title: "Quality Access",
      desc: "Get access to top hospitals, doctors, and healthcare services."
    }
  ];



  const whyInsurance = [
    {
      icon: <FaCheckCircle />,
      title: "Easy Enrollment",
      desc: "Simple and guided process to help you choose and enroll without confusion."
    },
    {
      icon: <FaWallet />,
      title: "Affordable Plans",
      desc: "Flexible pricing options designed to fit your budget with no hidden costs."
    },
    {
      icon: <FaUserCog />,
      title: "Personalized Coverage",
      desc: "Tailored insurance solutions based on your needs, lifestyle, and goals."
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Expert Support",
      desc: "Our team is always ready to assist you whenever you need help or guidance."
    }
  ];





  const steps = [
    {
      icon: <FaSearch />,
      title: "Tell us your needs",
      desc: "Share your health, budget, and preferences so we can suggest the best plans."
    },
    {
      icon: <FaClipboardList />,
      title: "Compare plans",
      desc: "View top insurance options side-by-side with clear benefits and pricing."
    },
    {
      icon: <FaShieldAlt />,
      title: "Get covered",
      desc: "Enroll quickly with expert guidance and enjoy peace of mind."
    }
  ];



  const client = [
    {
      text: "Vemtek Insurance made enrolling in Medicare simple. I finally felt supported.",
      name: "James P.",
      role: "Medicare Client",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: "I was worried about costs, but they helped me find the best plan for my family.",
      name: "Mary T.",
      role: "Family Plan",
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: "Everything was explained clearly. I felt confident choosing my coverage.",
      name: "Robert M.",
      role: "Medicare Guidance",
      img: "https://randomuser.me/api/portraits/men/65.jpg"
    },
    {
      text: "Filing a claim was smooth. Their support team guided me at every step.",
      name: "Linda S.",
      role: "Claims Support",
      img: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];


  const [showPopup, setShowPopup] = useState(false);


  return (
    <>

      <SEO
        title="Vemtek Insurance | Affordable Health Insurance"
        description="Compare and buy affordable health insurance plans with expert guidance and fast claim support."
        url="https://vemtek-insurance.onrender.com/"
      />

      <ScrollToTop />



      {/* hero section start  */}

      <section className="health-hero">
        <div className="container-fluid px-5">
          <div className="row align-items-center">

            {/* LEFT */}
            <div className="col-lg-6 hero-left">

              <h1 className="hero-heading">
                Affordable Health <br />
                Insurance for Your <br />
                <span>Peace of Mind</span>
              </h1>

              <p className="hero-text">
                Simple plans, expert guidance, and comprehensive coverage that truly fits your needs.
                From understanding your options to securing the right plan, we make the process easy,
                transparent, and stress-free, so you and your loved ones can focus on living well.
              </p>

              {/* Buttons */}
              <div className="hero-actions">
                <a href="/contact" className="btn-primary-custom">
                  Find the Right Insurance Now
                </a>

                <button
                  className="btn-outline-custom"
                  onClick={() => setShowPopup(true)}
                >
                  <i className="fa-solid fa-phone"></i>
                  Call Expert Now
                </button>

                {showPopup && (
                  <div className="call-popup">
                    <div className="call-popup-box">
                      <h4>Before you call</h4>
                      <p>
                        Calling this number will connect you with a licensed insurance agent.
                        Calls may be recorded for quality and compliance purposes.
                      </p>

                      <div className="popup-actions">
                        <button onClick={() => setShowPopup(false)} className="btn-cancel">
                          Cancel
                        </button>

                        <a href="tel:+1 516-518-5065 " className="btn-confirm">
                          Continue Call
                        </a>
                      </div>
                    </div>
                  </div>
                )}


              </div>



              {/* Divider */}
              <div className="hero-divider"></div>

              {/* Trust */}
              <div className="hero-trust">
                <span><i className="fa-solid fa-shield-halved"></i> Licensed & Certified</span>
                <span><i className="fa-solid fa-star"></i> 5-Star Rated</span>
                <span><i className="fa-solid fa-users"></i> 10,000+ Covered</span>
              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6 text-center">
              <div className="hero-image-wrapper">
                <img
                  src={heroImg}
                  alt="Health Insurance"
                  className="img-fluid hero-image"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>
        {`
/* overlay */
.call-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  /* animation */
  animation: fadeIn 0.3s ease;
}

/* popup box */
.call-popup-box {
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);

  /* animation */
  animation: scaleUp 0.3s ease;
}

.call-popup-box h4 {
  color: #053e99;
  margin-bottom: 10px;
}

.call-popup-box p {
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
}

/* buttons */
.popup-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.btn-cancel {
  background: #ddd;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
}

.btn-confirm {
  background: #053e99;
  color: #fff !important;
  padding: 10px 16px;
  border-radius: 6px;
  text-decoration: none;
}

/* ================= ANIMATION ================= */

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scaleUp {
  from {
    transform: scale(0.85);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}


     /* ================= HERO SECTION ================= */

.health-hero {
  padding: 70px 0;
  background: radial-gradient(circle at 10% 20%, rgba(112,172,16,0.10), transparent 40%),
              radial-gradient(circle at 90% 80%, rgba(18,100,187,0.10), transparent 40%),
              #fefefe;
  position: relative;
  overflow: hidden;
}

/* background glow */
.health-hero::before,
.health-hero::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.35;
  z-index: 0;
}

.health-hero::before {
  width: 260px;
  height: 260px;
  // background: #70ac10;
  top: -80px;
  left: -80px;
}

.health-hero::after {
  width: 260px;
  height: 260px;
  // background: #1264bb;
  bottom: -60px;
  right: -60px;
}

.container {
  position: relative;
  z-index: 2;
}

/* ================= TEXT ================= */

.hero-heading {
  font-size: 52px;
  font-weight: 800;
  color: #053e99;
  line-height: 1.2;
}

.hero-heading span {
  color: #70ac10;
  background: linear-gradient(transparent 60%, rgba(112,172,16,0.2) 40%);
  padding: 4px 10px;
  border-radius: 6px;
}

.hero-text {
  margin-top: 20px;
  font-size: 16px;
  color: #4a5a6a;
  line-height: 1.8;
  max-width: 520px;
}

/* ================= BUTTONS ================= */

.hero-actions {
  margin-top: 30px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.btn-primary-custom {
  background: linear-gradient(135deg, #053e99, #1264bb);
  color: #fff;
  padding: 14px 26px;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 10px 25px rgba(5,62,153,0.25);
  transition: all 0.3s ease;
}

.btn-primary-custom:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(5,62,153,0.35);
  color:white;
}

.btn-outline-custom {
  border: 2px solid #70ac10;
  background: #fff;
  color: #053e99;
  padding: 13px 22px;
  border-radius: 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.btn-outline-custom i {
  color: #70ac10;
}

.btn-outline-custom:hover {
  background: #70ac10;
  color: #fff;
}

.btn-outline-custom:hover i {
  color: #fff;
}

/* ================= DIVIDER ================= */

.hero-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, #ddd, transparent);
  margin: 30px 0;
}

/* ================= TRUST ================= */

.hero-trust {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  font-size: 14px;
  color: #053e99;
}

.hero-trust span {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #fff;
  padding: 6px 12px;
  border-radius: 20px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
}

.hero-trust i {
  color: #70ac10;
}

/* ================= IMAGE ================= */

.hero-image-wrapper {
  position: relative;
  padding: 10px;
}

/* background card */
.hero-image-wrapper::before {
  content: "";
  position: absolute;
  top: 15px;
  left: 15px;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #eaf3ff, #f3f9ff);
  border-radius: 30px;
  z-index: 0;
}

/* main image */
.hero-image {
  position: relative;
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 10px 0px 0px 40px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.15);
  z-index: 2;
  transition: 0.4s ease;
}

.hero-image:hover {
  transform: scale(1.03);
}

/* ================= RESPONSIVE ================= */

@media (max-width: 992px) {
  .health-hero {
    padding: 70px 0;
  }

  .hero-heading {
    font-size: 34px;
    text-align: center;
  }

  .hero-text {
    text-align: center;
    margin: 15px auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-trust {
    justify-content: center;
  }

  .hero-image {
    margin-top: 30px;
  }
}

@media (max-width: 576px) {
  .hero-heading {
    font-size: 26px;
  }

  .btn-primary-custom,
  .btn-outline-custom {
    width: 100%;
    justify-content: center;
  }

  .hero-trust {
    gap: 10px;
  }
}
     `}
      </style>



      {/* Why Health Insurance Matters */}

      <section className={styles.section}>
        <div className="container">

          {/* HEADING */}
          <div className={styles.headingBox}>
            <h2>Why Health Insurance Matters</h2>
            <p>
              Health insurance is more than just a policy it's your financial
              safety net and access to quality healthcare when you need it most.
            </p>
          </div>

          {/* CARDS */}
          <div className={styles.grid}>
            {data.map((item, index) => (
              <div key={index} className={styles.card}>

                <div className={styles.icon}>
                  {item.icon}
                </div>

                <h3 className="fs-5 fw-bold">{item.title}</h3>
                <p>{item.desc}</p>

              </div>
            ))}
          </div>

        </div>
      </section>


      {/* Our Health Insurance Solutions */}
      <section className={styles.sectionWrapper}>
        <div className={styles.innerContainer}>

          {/* HEADING */}
          <div className={styles.headingBoxx}>
            <h2>Our Health Insurance Solutions</h2>
            <p>
              Everyone's needs are different. That’s why we offer flexible
              insurance solutions tailored for individuals, families, and seniors.
            </p>
          </div>

          {/* CARDS */}
          <div className={styles.gridd}>
            {healthIns.map((item, i) => (
              <div
                key={i}
                className={styles.card}
                onClick={() => handleNavigate(item.link)}
              >
                <div className={styles.iconss}>{item.icon}</div>

                <h3>{item.title}</h3>
                <p className="fs-6">{item.desc}</p>

                <div className={styles.btnGroup}>
                  <button
                    className={styles.primaryBtnn}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigate(item.link);
                    }}
                  >
                    Get Details →
                  </button>

                  <button
                    className={styles.secondaryBtnn}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleQuote();
                    }}
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>





      {/* Why Choose Vemtek Insurance */}
      <section className={styles.section}>
        <div className={styles.container}>

          {/* HEADING */}
          <div className={styles.heading}>
            <h2>Why Choose Vemtek Insurance</h2>
            <p>
              We make insurance simple, affordable, and reliable — giving you
              complete peace of mind at every step.
            </p>
          </div>

          {/* CARDS */}
          <div className={styles.grided}>
            {whyInsurance.map((item, i) => (
              <div key={i} className={styles.card}>

                <div className={styles.icon}>
                  {item.icon}
                </div>

                <h3 className="fw-bold fs-5">{item.title}</h3>
                <p>{item.desc}</p>

              </div>
            ))}
          </div>
          {/* CTA */}
          <div className={styles.cta}>
            <a
              href="#"
              className={styles.ctaBtn}
              onClick={(e) => {
                e.preventDefault();

                const confirmCall = window.confirm(
                  "You will be connected with a licensed insurance agent.\nCalls may be recorded for quality and compliance purposes.\n\nDo you want to continue?"
                );

                if (confirmCall) {
                  window.location.href = "tel:+15165185065";
                }
              }}
            >
              <FaPhoneAlt />
              Talk to an Expert
            </a>

          </div>

        </div>
      </section>



      {/* How It Works   */}
      <section className={styles.section}>
        <div className={styles.container}>

          {/* HEADING */}
          <div className={styles.heading}>
            <h2>How It Works</h2>
            <p>Simple steps to secure your future with Vemtek Insurance</p>
          </div>

          {/* FLOW STEPS */}
          <div className={styles.flowGrid}>
            {steps.map((item, i) => (
              <div key={i} className={styles.stepCard}>

                {/* STEP NUMBER */}
                <div className={styles.stepBadge}>
                  {i + 1}
                </div>

                {/* ICON */}
                <div className={styles.icons}>
                  {item.icon}
                </div>

                <h3 className="fs-5 fw-bold">{item.title}</h3>
                <p>{item.desc}</p>

              </div>
            ))}
          </div>

        </div>
      </section>



      {/* What Our Clients Say */}
      <section className={styles.section}>
        <div className={styles.container}>

          {/* HEADING */}
          <div className={styles.heading}>
            <h2>What Our Clients Say</h2>
            <p>
              Real experiences from people who trust Vemtek Insurance
            </p>
          </div>

          {/* SLIDER */}
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={25}
            slidesPerView={3}
            autoplay={{ delay: 3000 }}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 }
            }}
          >
            {client.map((item, i) => (
              <SwiperSlide key={i}>
                <div className={styles.card}>

                  <p className={styles.text}>
                    “{item.text}”
                  </p>

                  <div className={styles.user}>
                    <img src={item.img} alt={item.name} />
                    <div>
                      <h3 className="fw-bold fs-6">{item.name}</h3>
                      <span>{item.role}</span>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>



      <Frequently_Asked_Question />




      <section className={styles.wrapper}>
        <div className={styles.inner}>

          {/* LEFT CONTENT */}
          <div className={styles.left}>
            <h2>Ready to Secure Your Health Coverage?</h2>

            <p>
              The right insurance makes all the difference. At <b>Vemtek Insurance</b>,
              we simplify the process and help you choose the best plan for your future.
            </p>

            {/* FEATURES */}
            <div className={styles.features}>
              <span><FaCheckCircle /> Trusted by 10,000+</span>
              <span><FaCheckCircle /> Expert Guidance</span>
              <span><FaCheckCircle /> No Hidden Fees</span>
            </div>
          </div>

          {/* RIGHT BUTTONS */}
          <div className={styles.right}>

            {/* CONTACT PAGE */}
            <Link to="/contact" className={styles.primaryBtn}>
              <HiOutlineCalendarDays />
              Get Free Quote
            </Link>

            {/* CALL BUTTON */}
            <a
              href="#"
              className={styles.secondaryBtn}
              onClick={(e) => {
                e.preventDefault();

                const confirmCall = window.confirm(
                  "Calling this number will connect you with a licensed insurance agent.\n Calls may be recorded for quality and compliance purposes.\n\nDo you want to continue?"
                );

                if (confirmCall) {
                  window.location.href = "tel:+15165185065";
                }
              }}
            >
              <FaPhoneAlt />
              Call Now
            </a>
          </div>

        </div>
      </section>

    </>
  );
}

export default Home;