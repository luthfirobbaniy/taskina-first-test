import { ButtonPropsInterface } from "../interfaces";

export const Button = (props: ButtonPropsInterface) => {
  const { children } = props;

  return (
    <div className="button-container">
      <button className="text">{children}</button>
    </div>
  )
}
