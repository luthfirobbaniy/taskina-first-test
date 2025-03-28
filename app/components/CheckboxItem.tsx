"use client";

import { useEffect, useState } from "react";
import { CheckboxItemProps } from "../interfaces";

export const CheckboxItem = (props: CheckboxItemProps) => {
  const {
    caption,
    allChecked,
    totalChecked,
    updateTotalChecked,
  } = props;

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (allChecked) {
      setChecked(true);
    } else if (!totalChecked) {
      setChecked(false);
    }
  }, [allChecked]);

  const onChange = () => {
    updateTotalChecked(checked);
    setChecked(!checked);
  }

  return (
    <label className="checkbox-item">
      <p className="text">{caption}</p>
      <input onChange={onChange} checked={checked} type="checkbox" />
      <div className="checkbox">
        <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.1047 12.9635L18 1" strokeLinecap="round"/>
        </svg>
      </div>
    </label>
  )
}
