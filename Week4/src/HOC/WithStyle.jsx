//HOC 부분
export default function WithStyle(Component) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    return (
      <Component
        style={{ color: "red", border: "solid 1px blue" }}
        {...props}
      />
    );
  };
}
