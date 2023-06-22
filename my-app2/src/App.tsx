import React, { FC } from "react";
import Box from "./components/Box";
import Circle from "./components/Circle";

const App: FC = () => {
  return (
    <div>
      <Box color="pink" width={200} height={200} />
      <Box color="red" width={400} height={100} />
      <Box color="blue" width={300} height={400} />
      <Circle color="green" width={300} height={300} radius={9999} />
    </div>
  );
};

export default App;
