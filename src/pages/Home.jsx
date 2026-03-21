import styles from "./Home.module.css";
import heroImg from "../assets/vemtek-hero-img.jpeg";
import shields from "../assets/floating-shields.png";
import { FaBook, FaChartLine, FaCheckCircle, FaClipboardList, FaHeadset, FaHeart, FaPhoneAlt, FaPlus, FaSearch, FaShieldAlt, FaShoppingCart, FaUserCog, FaUsers, FaWallet } from "react-icons/fa";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Frequently_Asked_Question from "../components/Frequently-Asked-Question";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { Link } from "react-router-dom";
function Home() {

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




  const healthIns = [
    {
      icon: <FaPlus />,
      title: "Medicare Plans",
      desc: "Explore plans for seniors including Part B, Part D, and Medicare Advantage options."
    },
    {
      icon: <FaShoppingCart />,
      title: "ACA Marketplace Health Plans",
      desc: "Get affordable coverage through the ACA Marketplace."
    },
    {
      icon: <FaBook />,
      title: "Life Insurance & Final Expense",
      desc: "Protect your loved ones from unexpected expenses with final expense insurance."
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
      text: "Secure Future Coverage made enrolling in Medicare simple. I finally felt supported.",
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






  return (
    <>
      {/* hero section start  */}
      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <h1>
            Grow with Future-Ready <br /> Insurance Protection
          </h1>

          <p>
            At Vemtek Insurance, we combine industry expertise with modern
            technology to deliver tailored coverage for individuals, families,
            and businesses. From risk assessment to long-term planning, we help
            you secure your future with confidence and clarity.
          </p>

          {/* Floating Shield */}
          <div className={styles.shieldWrapper}>
            <img src={shields} alt="Protection Shield" />
          </div>

          {/* CTA Button */}
          <button className={styles.btn}>
            Call Expert Now →
          </button>
        </div>
      </section>


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

                <h4>{item.title}</h4>
                <p>{item.desc}</p>

              </div>
            ))}
          </div>

        </div>
      </section>



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
              <div key={i} className={styles.card}>

                <div className={styles.icon}>
                  {item.icon}
                </div>

                <h4>{item.title}</h4>
                <p>{item.desc}</p>

                {/* <div className={styles.btnGroup}>
                  <button className={styles.primaryBtn}>
                    Get Details →
                  </button>

                  <button className={styles.secondaryBtn}>
                    Get a Quote
                  </button>
                </div> */}

              </div>
            ))}
          </div>

        </div>
      </section>






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

                <h4>{item.title}</h4>
                <p>{item.desc}</p>

              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={styles.cta}>
            <a href="tel:+918423811106" className={styles.ctaBtn}>
              <FaPhoneAlt />
              Talk to an Expert
            </a>
          </div>

        </div>
      </section>




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

                <h4>{item.title}</h4>
                <p>{item.desc}</p>

              </div>
            ))}
          </div>

        </div>
      </section>




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
                    <img src={item.img} alt="" />
                    <div>
                      <h4>{item.name}</h4>
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
            <a href="tel:+918423811106" className={styles.secondaryBtn}>
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