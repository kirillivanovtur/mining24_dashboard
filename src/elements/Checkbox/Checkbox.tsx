import React, {ChangeEvent} from 'react';
import SvgIcon from "@mui/material/SvgIcon";
import {CheckboxMaterial, FormControl} from "./Checkbox.Styles.tsx";
interface Props {
  className?: string;
  label?: string;
  error?: string;
  checked: boolean;
  onChange?: (value: boolean) => void;
}

export const Checkbox: React.FC<Props> = (props: Props) => {
  const {
    className,
    label,
    checked,
    error,
    onChange,
  } = props;

  const CheckBoxIcon = () => {
    return (
      <SvgIcon>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Property 1=Default">
            <rect id="Rectangle 103" x="0.5" y="0.5" width="13" height="13" rx="3.5" stroke="#3A3B3C"/>
          </g>
        </svg>
      </SvgIcon>
    );
  };

  const CheckBoxCheckedIcon = () => {
    return (
      <SvgIcon>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Property 1=checked">
            <rect id="Rectangle 103" x="0.5" y="0.5" width="13" height="13" rx="3.5" stroke="#3A3B3C"/>
            <circle id="Ellipse 11" cx="7" cy="7" r="4" fill="#3A3B3C"/>
          </g>
        </svg>
      </SvgIcon>
    );
  };

  const onCheckboxChange = (value: boolean) => {
    if (!onChange) return false;
    return onChange(value);
  };

  return (
    <FormControl
      className={`${className} ${error ? '-error' : ''}`}
      control={
        <CheckboxMaterial
          checked={checked}
          icon={<CheckBoxIcon />}
          checkedIcon={<CheckBoxCheckedIcon />}
          aria-describedby="termsRegistration-text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onCheckboxChange(e.target.checked)}
        />
      }
      label={label}
    />
  );
};

export default Checkbox;
