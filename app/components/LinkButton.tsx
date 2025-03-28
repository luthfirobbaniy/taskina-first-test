import Link from "next/link";
import { LinkButtonProps } from "../interfaces";

export const LinkButton = (props: LinkButtonProps) => {
  const { href } = props;

  return (
    <div className="link">
      <Link className="text" href={href}>See Third Parties{"\'"} Open Source Licenses</Link>
    </div>
  )
}
