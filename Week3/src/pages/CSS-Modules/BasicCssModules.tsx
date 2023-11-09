import styles from "./styles/Basic.module.css";

const BasicCssModules = () => {
  return (
    <section>
      <h2>1️⃣ 기본 CSS-Modules 사용법 익히기</h2>
      {/* 단일 클래스 + 클래스명에 하이픈 있는 경우 */}
      <button className={styles["basic-btn"]}>버튼 0</button>
      {/* 다중 클래스 + 템플릿 리터럴 */}
      <button className={`${styles.btnStyle} ${styles.firstBtn}`}>
        버튼 1
      </button>
      {/* 다중 클래스 + join() 사용 */}
      <button className={[styles.btnStyle, styles.secondBtn].join("")}>
        버튼 2
      </button>
    </section>
  );
};

export default BasicCssModules;
