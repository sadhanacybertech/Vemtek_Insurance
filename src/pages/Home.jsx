import styles from "./Home.module.css";
import heroImg from "../assets/vemtek-hero-img.jpeg";
import shields from "../assets/floating-shields.png";

function Home() {
  return (
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
          Get a Free Quote →
        </button>
      </div>
    </section>
  );
}

export default Home;