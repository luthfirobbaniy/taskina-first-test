import Link from "next/link";
import { LinkButtonProps } from "../interfaces";

export const LinkButton = (props: LinkButtonProps) => {
  return (
    <div className="link">
      <Link className="text" href={"/licenses"}>See Third Parties' Open Source Licenses</Link>
    </div>
  )
}
