import React from "react";

function App() {
  // Create an array of numbers from 1 to 10
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Natural Numbers from 1 to 10</h1>
      <ul>
        {numbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
