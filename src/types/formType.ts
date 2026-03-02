// export interface FormTypes {
//   action?: string;
//   method?: string;
//   className?: string;
// }

// export interface FormFieldTypes {
//   label: string;
//   type: string;
//   name: string;
//   placeholder?: string;
//   className?: string;
//   value?: string;
//   onChange?: Event;
// }

export interface FieldConfig {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  rowClass?: string;
}

export interface FormFieldTypes<T extends Record<string, string>> {
  fields: FieldConfig[];
  onSubmit: (formData: T) => void;
  action?: string;
  method?: string;
  className?: string; // For form
  buttonText?: string;
  fieldItemClassName?: string; // For fieldset
  labelClassName?: string; // For label
  inputClassName?: string; // For label
  buttonWrapperRowClass?: string; // NEW: Specific class for the button's wrapper div (e.g., styles['form__row--full'])
}

export interface SingleFormFieldProps extends FieldConfig {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fieldItemClassName?: string; 
  labelClassName?: string; 
  inputClassName?: string; 
}