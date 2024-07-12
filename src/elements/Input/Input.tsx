import React, { createRef } from 'react';
import {cleanStringWithNumberVal, escapeRegExp} from '../../common/utils/formatters';
import {
  FormControl,
  FormControlInput,
  FormControlInputError, FormControlInputLabel, FormControlInputWrap, FormControlShow,
} from './Input.Styles';

export type InputType = 'email' | 'password' | 'number' | 'text' | 'date' | 'phone' | 'url' | 'float';

interface Props {
  id?: string;
  className?: string;
  type: InputType;
  name: string;
  numberType?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  value?: string;
  error?: string;
  onChange?: (field: string, value: string) => void;
  onBlur?: (field: string, value?: string) => void;
  maxLength?: number;
  show?: boolean;
  onShow?: (field: string) => void;
  image?: string;
  maxNumber?: number;
  autoComplete?: string;
}

export const Input: React.FC<Props> = (props: Props) => {
  const {
    id,
    className,
    name,
    type,
    numberType,
    value,
    error,
    placeholder,
    label,
    disabled,
    onChange,
    onBlur,
    maxLength,
    show,
    onShow,
    image,
    maxNumber,
    autoComplete,
  } = props;

  const inputRef = createRef();

  const onInputChange = (value: string) => {
    if (!onChange) return false;
    if (type === 'number') {
      let cleanValue = cleanStringWithNumberVal(value);
      if (maxNumber && maxNumber < Number(cleanValue)) {
        cleanValue = String(maxNumber);
      }
      return onChange(name, cleanValue);
    }
    if (numberType === 'number') {
      const floatNumberRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`);
      const valueIsValid = floatNumberRegex.test(escapeRegExp(value));
      if (!valueIsValid) {
        return false;
      }

    }
    return onChange(name, value);
  };

  const onInputBlur = () => {
    if (!onBlur) return;

    onBlur(name, value);
  };

  const onToggleShow = () => {
    if (!onShow) return;

    onShow(name);
  };

  return (
    <FormControl className={`${className} ${error ? '-error' : ''} ${!!label ? '-label' : ''} ${!!image ? '-image' : ''} ${!!onShow ? '-show' : ''}`}>
      <FormControlInputWrap className="input-wrap">
        {
          label ? (
            <FormControlInputLabel>{label}</FormControlInputLabel>
          ) : null
        }
        <FormControlInput
          ref={inputRef}
          id={id}
          type={type === 'password' ? show ? 'text' : type : type}
          name={name}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete ? autoComplete : "off"}
          disabled={disabled}
          onChange={(e: React.ChangeEvent<any>) => onInputChange(e.target.value)}
          onBlur={onInputBlur}
          maxLength={maxLength || 100}
        />
        {/*{*/}
        {/*  type === 'url' ? (*/}
        {/*    <span className="input-url">http://</span>*/}
        {/*  ) : null*/}
        {/*}*/}
        {
          onShow ? (
            <FormControlShow tabIndex={-1} className="control-show" type="button" onClick={onToggleShow}/>
          ) : null
        }
        {
          image ? (
            <img className="input-img" src={image} alt="cp" />
          ) : null
        }
      </FormControlInputWrap>

      <FormControlInputError>{error}</FormControlInputError>
    </FormControl>
  );
};

export default Input;
