import styled from "@emotion/styled";

const EmotionPerformance = () => {
  return (
    <>
      <section>
        <h1>🔥 Css-In-Css vs Css-In-Js 퍼포먼스 비교 🔥</h1>
        <h2>👩🏻‍🎤 Css-In-Js (Emotion)</h2>
      </section>

      <Wrapper>
        <Wrapper>
          <Button primary={true}>test1</Button>
          <Button primary={false}>test2</Button>
          <Button primary={true}>test3</Button>
          <Button primary={false}>test4</Button>
          <TomatoButton>test5</TomatoButton>
          <TomatoButton>test6</TomatoButton>
        </Wrapper>
        <Wrapper>
          <ColorButton bg="lightgreen" color="yellow">
            colorButton
          </ColorButton>
          <ColorButton bg="gray" color="lightgreen">
            colorButton2
          </ColorButton>
          <ColorButton bg="lightblue" color="gray">
            colorButton3
          </ColorButton>
          <ColorButton bg="orange" color="lightblue">
            colorButton4
          </ColorButton>
          <ColorButton bg="yellow" color="orange">
            colorButton5
          </ColorButton>
        </Wrapper>
        <Wrapper>
          <Title>타이틀</Title>
          <Title>타이틀2</Title>
        </Wrapper>
        <Wrapper>
          <a>Link</a>
        </Wrapper>
        <Wrapper>
          <StyledLink>Link2</StyledLink>
        </Wrapper>
        <Wrapper>
          <Thing>Hello world!</Thing>
          <Thing>How ya doing?</Thing>
          <SomeThing>The sun is shining...</SomeThing>
          <Thing>Don't you think?</Thing>
          <SomeThingElse>
            <Thing>Splendid.</Thing>
          </SomeThingElse>
        </Wrapper>
        <Wrapper>
          <Input type="text" />
          <PasswordInput />
        </Wrapper>
        <Wrapper>
          <Label color="gray">label1</Label>
          <Label color="lightgray">label2</Label>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default EmotionPerformance;

const Wrapper = styled.section`
  padding: 0.3em;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin: 0.5em;
`;

const Button = styled.button<{ primary?: boolean }>`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 0.2em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const ColorButton = styled(Button)<{ bg: string; color: string }>`
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const Thing = styled.div`
  color: blue;
  &:hover {
    color: red;
  }
  & ~ & {
    background: tomato;
  }
  & + & {
    background: lime;
  }
`;

const SomeThing = styled(Thing)`
  background: orange;
`;

const SomeThingElse = styled(Thing)`
  border: 1px solid;
`;

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  padding: 0;
  margin: 0.2em;
`;

const StyledLink = styled.a`
  color: palevioletred;
  font-weight: bold;
`;

const Input = styled.input`
  border: 2px solid palevioletred;
  margin: 0.3em;
  padding: 0.3em;
  width: 120px;
`;

const PasswordInput = styled(Input)`
  border: 2px solid aqua;
  width: 150px;
`;

const Label = styled.label<{ color: string }>`
  display: flex;
  align-items: center;
  line-height: 1.2;

  color: ${(props) => props.color};

  &::before {
    content: "◀";
    margin: 0 10px;
  }
`;
