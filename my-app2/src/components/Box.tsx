import { FC, useState } from "react";

export enum Color {
  Pink = "pink",
  Red = "red",
  Blue = "blue",
  Green = "green",
}

export interface BoxProps {
  color: Color;
  width: number;
  height?: number;
}

//<interface Props> :  제네릭
const Box: FC<BoxProps> = ({ color, width, height }) => {
  const [newWidth, setNewWidth] = useState<number>(width);

  const onClickBox = () => {
    setNewWidth(newWidth + 100);
  };

  return (
    <div
      style={{
        backgroundColor: color,
        width: newWidth,
        height: height ? height : newWidth,
        margin: 40,
      }}
      onClick={onClickBox}
    ></div>
  );
};

export default Box;
