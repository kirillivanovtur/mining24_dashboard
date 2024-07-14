import styled from 'styled-components';
import {FormControlLabel, Checkbox} from "@mui/material";

export const FormControl: any = styled(FormControlLabel)`
  text-align: left;
  display: flex;
  margin-left: 0!important;
  margin-right: 0!important;

  .MuiSvgIcon-root {
    width: 16px;
    height: 16px;
  }

  .MuiFormControlLabel-label {
    font-family: var(--inter);
    color: var(--gray-600, #4B5563);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: normal;
  }

  .MuiCheckbox-root {
    padding: 0;
    margin-right: 7px;

  }

  + p {
    display: none;
    animation: fadeIn 0.8s;
  }

  &.-error {
    .MuiSvgIcon-root {
      fill: var(--red);
    }

    + p {
      display: block;
    }
  }
`;

export const CheckboxMaterial: any = styled(Checkbox)`

`;
