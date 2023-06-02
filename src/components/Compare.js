import Left from "./Left";
import Right from "./Right";
import Visualizer from "./Visualizer";

const Compare = () =>{
  // const firstFunction = () => {
  //   // implementation for first function
    
  // };

  // const secondFunction = () => {
  //   // implementation for second function
  // };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1, backgroundColor: "lightblue" }}>
        <div>
            <Left />
        </div>
      </div>
      <div style={{ flex: 1, backgroundColor: "lightgreen" }}>
        <Right  />
      </div>
    </div>
  );
};

export default Compare;