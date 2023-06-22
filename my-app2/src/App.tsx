import React, { FC } from "react";
import Box, { Color } from "./components/Box";
import Circle from "./components/Circle";

const App: FC = () => {
  return (
    <div>
      <Box color={Color.Pink} width={200} height={200} />
      <Box color={Color.Green} width={400} height={100} />
      <Box color={Color.Blue} width={300} height={400} />
      <Circle color={Color.Red} width={300} height={300} radius={9999} />
    </div>
  );
};

export default App;
