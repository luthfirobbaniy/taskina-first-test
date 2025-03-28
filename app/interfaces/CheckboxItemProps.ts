export interface CheckboxItemProps {
  caption: string;
  allChecked: boolean;
  totalChecked: number;
  updateTotalChecked: (checked: boolean) => void;
}
