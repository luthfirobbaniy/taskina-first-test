import { Fragment } from "react";
import styles from "./styles.module.css";
import { licenses } from "../data";

export default function Page() {
  return (
    <div>
      {
        licenses.map((license, i) => {
          return (
            <div className={styles["license-card"]} key={i}>
              <code>Project: {license.projectName}</code>
              <code>Version: {license.projectVersion}</code>
              <code>License: {license.name}</code>
              <code>Copyright: {license.copyright}</code>
              <code>Author: {license.publisher}</code>
              <code>Repository: {license.url}</code>
              <code className={styles["license-text"]}>
                {
                  license.text?.split("\n").map((item, i) =>
                    <Fragment key={i}>
                      {item}<br/>
                    </Fragment>
                  )
                }
              </code>
            </div>
          )
        })
      }
    </div>
  )
}
