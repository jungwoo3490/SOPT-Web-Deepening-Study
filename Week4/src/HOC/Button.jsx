import WithStyle from "./WithStyle";

//HOC가 된 버튼
const Button = ({ style, children }) => <p style={style}>{children}</p>;

const StyledButton = WithStyle(Button);

export default StyledButton;
