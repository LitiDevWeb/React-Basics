// function Btn() {
//   const clickHandler = () => {
//     console.log("Clicked");
//   };
//   return <button onClick={clickHandler}>Click me</button>;
// }
// export default Btn;

function Btn() {
  const clickHandler = () => {
    console.log("mouse click");
  };
  return <button onMouseOver={clickHandler}>Click me</button>;
}
export default Btn;
