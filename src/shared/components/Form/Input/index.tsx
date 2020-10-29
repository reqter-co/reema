import React, {
  ForwardRefRenderFunction,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Input } from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const InputCmp: ForwardRefRenderFunction<HTMLInputElement, IProps> = (
  props,
  ref
) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef?.current as HTMLInputElement);
  return <Input ref={inputRef} {...props} />;
};

export default forwardRef(InputCmp);
