import { css } from "@emotion/react";

const Composition = () => {
  return (
    <section>
      <h2>3️⃣ composition 기능에 대해 알아가기 </h2>
      <div css={base}>This will be turquoise</div>
      <div css={[danger, base]}>
        This will be also be turquoise since the base styles overwrite the
        danger styles.
      </div>
      <div css={[base, danger]}>This will be red</div>
    </section>
  );
};

export default Composition;

const danger = css`
  color: red;
`;

const base = css`
  background-color: whitesmoke;
  color: turquoise;
`;
