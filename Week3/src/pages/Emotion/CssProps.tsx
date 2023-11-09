import { css } from "@emotion/react";

const CssProps = () => {
  return (
    <>
      <section>
        <h2>1️⃣ css Prop 연습하기</h2>
        <button
          css={{
            padding: "2rem",
            backgroundColor: "hotpink",
            color: "white",
            "&:hover": { backgroundColor: "grey" },
          }}
        >
          Object Styles로 사용할 수도 있고
        </button>
        <button
          css={css`
            padding: 2rem;
            background-color: white;
            color: hotpink;
            &:hover {
              background-color: grey;
            }
          `}
        >
          String Styles로도 사용 가능합니다.
        </button>

        <button css={[btnStyle, btnColor]}>
          여러 스타일을 적용할 때는 배열 형태로 가능합니다
        </button>
      </section>
    </>
  );
};

export default CssProps;

const btnStyle = css({
  padding: "2rem",
  border: "none",
  label: "new-button",
});

const btnColor = css({
  backgroundColor: "grey",
  color: "white",
  "&:hover": {
    backgroundColor: "hotpink",
  },
});
