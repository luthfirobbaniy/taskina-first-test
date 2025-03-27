import { Montserrat } from "next/font/google";
import { ReactNode } from "react";

const pages = [
  {
    id: 1,
    name: "Page 1",
  },
  {
    id: 2,
    name: "Page 2",
  },
  {
    id: 3,
    name: "Page 3",
  },
  {
    id: 4,
    name: "Page 4",
  },
];

function CheckboxItem(
  props: {
    caption: string;
  },
) {
  const { caption } = props;

  return (
    <label className="checkbox-container">
      <p className="text">{caption}</p>
      <input type="checkbox" />
      <div className="checkbox">
        <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.1047 12.9635L18 1" strokeLinecap="round"/>
        </svg>
      </div>
    </label>
  )
}

function Button(
  props: {
    children: ReactNode;
  }
) {
  const { children } = props;

  return (
    <div className="button-container">
      <button className="text">{children}</button>
    </div>
  )
}

function Divider() {
  return (
    <div className="line" />
  )
}

export default function Home() {
  return (
    <div className="container">
      <CheckboxItem caption={"All pages"}/>

      <Divider />

      <ul>
        {
          pages.map((page) => {
            return (
              <li key={page.id}>
                <CheckboxItem caption={page.name} />
              </li>
            )
          })
        }
      </ul>

      <Divider />

      <Button>Done</Button>
    </div>
  );
}
