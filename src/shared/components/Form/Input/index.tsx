import React, { FC } from "react";
import { Input } from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const InputCmp: FC<IProps> = (props) => {
  return <Input {...props} />;
};

export default InputCmp;
