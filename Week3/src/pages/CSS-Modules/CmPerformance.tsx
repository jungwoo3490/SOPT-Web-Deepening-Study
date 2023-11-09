import styles from "./styles/CmPerformance.module.css";

const CmPerformance = () => {
  return (
    <>
      <section>
        <h1>🔥 Css-In-Css vs Css-In-Js 퍼포먼스 비교 🔥</h1>
        <h2>🗂 Css-In-CSS (Css-Modules)</h2>
      </section>

      <div className={styles.wrapper}>
        <div className={styles.wrapper}>
          <button className={`${styles.button} ${styles.primary}`}>
            test1
          </button>
          <button className={styles.button}>test2</button>
          <button className={`${styles.button} ${styles.primary}`}>
            test3
          </button>
          <button className={styles.button}>test4</button>
          <button
            className={`${styles.button} ${styles.primary} ${styles.tomato}`}
          >
            test5
          </button>
          <button className={`${styles.button} ${styles.tomato}`}>test6</button>
        </div>
        <div className={styles.wrapper}>
          <button
            className={styles.button}
            style={{ background: "lightgreen", color: "yellow" }}
          >
            colorButton
          </button>
          <button
            className={styles.button}
            style={{ background: "gray", color: "lightgreen" }}
          >
            colorButton2
          </button>
          <button
            className={styles.button}
            style={{ background: "lightblue", color: "gray" }}
          >
            colorButton3
          </button>
          <button
            className={styles.button}
            style={{ background: "orange", color: "lightblue" }}
          >
            colorButton4
          </button>
          <button
            className={styles.button}
            style={{ background: "yellow", color: "orange" }}
          >
            colorButton5
          </button>
        </div>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>타이틀</h2>
          <h2 className={styles.title}>타이틀2</h2>
        </div>
        <div className={styles.wrapper}>
          <a>Link</a>
        </div>
        <div className={styles.wrapper}>
          <a className={styles.styledLink}>Link2</a>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.thing}>Hello world!</div>
          <div className={styles.thing}>How ya doing?</div>
          <div className={`${styles.thing} ${styles.something}`}>
            The sun is shining...
          </div>
          <div className={styles.thing}>Don't you think?</div>
          <div className={styles.somethingElse}>
            <div className={styles.thing}>Splendid.</div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <input
            type="text"
            className={styles.input}
            style={{ width: "120px" }}
          />
          <input
            type="password"
            className={`${styles.input} ${styles.password}`}
            style={{ width: "150px" }}
          />
        </div>
        <div className={styles.wrapper}>
          <label className={styles.label} style={{ color: "gray" }}>
            label1
          </label>
          <label className={styles.label} style={{ color: "lightgray" }}>
            label2
          </label>
        </div>
      </div>
    </>
  );
};

export default CmPerformance;
