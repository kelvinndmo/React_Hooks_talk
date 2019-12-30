// const App = props => {
//   const [count, setCount] = useState(props.count);
//   const [text, setText] = useState("");

//   useEffect(() => {
//     console.log("this will only run once");
//   }, []);

//   useEffect(() => {
//     console.log("useEffect ran");
//     document.title = count;
//   }, [count]);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   const reset = () => {
//     setCount(0);
//   };

//   const changeText = e => {
//     setText(e.target.value);
//   };
//   return (
//     <div>
//       <p>
//         The current {text || "count"} is {count}
//       </p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>reset</button>
//       <input value={text} onChange={changeText} />
//     </div>
//   );
// };
