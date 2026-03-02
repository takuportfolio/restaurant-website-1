import React from 'react';
import type { SingleFormFieldProps } from '../../../types/formType';

const FormField: React.FC<SingleFormFieldProps> = ({ 
  fieldItemClassName, // Now specifically for the fieldset/item
  labelClassName,     // For the label
  inputClassName,     // For the input
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  rowClass,
}) => (
  <fieldset className={`${fieldItemClassName || ''} ${rowClass || ''}`}>
    <label className={labelClassName} htmlFor={name}>{label}</label>
    <input 
      className={inputClassName}
      id={name}
      name={name} 
      type={type} 
      placeholder={placeholder} 
      value={value}
      onChange={onChange}
      required
    />
  </fieldset>
);

export default FormField;