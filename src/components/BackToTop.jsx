import { useEffect, useState } from "react";
import styles from "./BackToTop.module.css";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      className={`${styles.btn} ${show ? styles.show : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
}

export default BackToTop;