// import Composition from "./Emotion/Composition";
import CssProps from "./Emotion/CssProps";
import StyledComponent from "./Emotion/StyledComponent";

const PracticeEmotion = () => {
  return (
    <>
      <section>
        <h1>👩🏻‍🎤Emotion을 연습해보아요👩🏻‍🎤</h1>
      </section>

      {/* css Prop 연습하기 부분 */}
      <CssProps />
      {/* styled-component 연습하기 부분 */}
      <StyledComponent />

      {/* Composition 설명*/}
      {/* <Composition /> */}
    </>
  );
};

export default PracticeEmotion;
