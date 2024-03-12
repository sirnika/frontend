import Friday from "../pages/Friday";

const Tuesday = ({myStyle}) => {
  return (
    <>
      <h1 style={myStyle}>Hello tuesday</h1>
      <Friday myStyle={myStyle}/>
    </>
  );
};
export default Tuesday;
