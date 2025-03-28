import { CheckboxCard } from "./components";
import { pages } from "./data";

export default function Home() {
  return (
    <div>
      <CheckboxCard data={pages} />
    </div>
  )
}
