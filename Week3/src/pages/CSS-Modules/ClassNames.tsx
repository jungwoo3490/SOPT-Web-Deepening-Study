import { useState } from "react";
import styles from "./styles/ClassNames.module.css";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

const ClassNames = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <section>
      <h2>2️⃣ classnames 라이브러리 익히기</h2>

      {/* 1. classnames 사용하지 않으면*/}
      <button
        onClick={() => setClicked(!clicked)}
        className={`${styles.btn} ${
          clicked ? styles.clickedBtn : styles.originalBtn
        }`}
      >
        Click!
      </button>

      {/* 2. classnames 사용 */}
      <button
        onClick={() => setClicked(!clicked)}
        className={cn("btn", clicked ? "clickedBtn" : "originalBtn")}
      >
        Click!
      </button>
    </section>
  );
};

export default ClassNames;
