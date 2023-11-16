import WithStyle from "./WithStyle";

const Text = ({ style, children }) => <p style={style}>{children}</p>;

const StyledText = WithStyle(Text);

export default StyledText;
