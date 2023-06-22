import { FC } from "react";
import { BoxProps } from "./Box";

interface CircleProps extends BoxProps {
  radius: number;
}

const Circle: FC<CircleProps> = ({ color, width, height, radius }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width,
        height,
        margin: 40,
        borderRadius: radius,
      }}
    ></div>
  );
};

export default Circle;
