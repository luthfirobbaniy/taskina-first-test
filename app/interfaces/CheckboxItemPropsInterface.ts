export interface CheckboxItemPropsInterface {
  caption: string;
  allChecked: boolean;
  totalChecked: number;
  updateTotalChecked: (checked: boolean) => void;
}
