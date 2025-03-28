"use client";

import { useState, useEffect } from "react";
import { Button, CheckboxHeader, CheckboxItem, Divider } from ".";
import { CheckboxCardPropsInterface } from "../interfaces";

export const CheckboxCard = (props: CheckboxCardPropsInterface) => {
  const { data } = props;

  const [allChecked, setAllChecked] = useState(false);
  const [totalChecked, setTotalChecked] = useState(0);

  useEffect(() => {
    setAllChecked(totalChecked == data.length);
  }, [totalChecked]);

  const updateTotalChecked = (checked: boolean) => {
    if (checked) {
      setTotalChecked((totalChecked) => totalChecked - 1);
    } else {
      setTotalChecked((totalChecked) => totalChecked + 1);
    }
  }

  const forceUpdateTotalChecked = () => {
    if (totalChecked != data.length) {
      setTotalChecked(data.length);
    } else {
      setTotalChecked(0);
    }
  }

  return (
    <div className="checkbox-card">
      <CheckboxHeader
        caption={"All pages"}
        allChecked={allChecked}
        forceUpdateTotalChecked={forceUpdateTotalChecked}
      />

      <Divider />

      <ul>
        {
          data.map((item) => {
            return (
              <li key={item.id}>
                <CheckboxItem
                  caption={item.name}
                  allChecked={allChecked}
                  totalChecked={totalChecked}
                  updateTotalChecked={updateTotalChecked}
                />
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
