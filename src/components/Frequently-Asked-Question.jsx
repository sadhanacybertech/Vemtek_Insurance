import { useState } from "react";
import styles from "./Frequently-Asked-Question.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";

function Frequently_Asked_Question() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      q: "What insurance services does Vemtek provide?",
      a: "We offer health insurance, Medicare plans, life insurance, and personalized coverage tailored to your needs."
    },
    {
      q: "Why choose Vemtek Insurance?",
      a: "We combine expert guidance, transparent pricing, and personalized support to ensure you get the best coverage."
    },
    {
      q: "How long does it take to get coverage?",
      a: "Most plans can be activated quickly after approval, and our team ensures a smooth and fast process."
    },
    {
      q: "Can you help me choose the best plan?",
      a: "Yes, our experts analyze your needs and recommend the most suitable plan for your situation."
    },
    {
      q: "Do you offer customized insurance solutions?",
      a: "Absolutely! We tailor plans based on your health, budget, and future goals."
    }
  ];

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>

        {/* HEADING */}
        <div className={styles.heading}>
          <h2>Frequently Asked Questions</h2>
          <p>
            Get clarity on Vemtek Insurance services, plans, and how we help secure your future.
          </p>
        </div>

        {/* FAQ GRID */}
        <div className={styles.grid}>
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`${styles.card} ${active === i ? styles.active : ""}`}
              onClick={() => toggle(i)}
            >
              <div className={styles.question}>
                <span>{item.q}</span>
                <div className={styles.icon}>
                  {active === i ? <FaMinus /> : <FaPlus />}
                </div>
              </div>

              <div className={styles.answer}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Frequently_Asked_Question;