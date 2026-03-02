import  React, { useState } from 'react';
// Component
import FormField from './FormField';
import Button from '../Button';
// type
import type { FormFieldTypes, FieldConfig } from '../../../types/formType';

// Generic functional component no need to have
// Explicit type React.FC caused error.
const DynamicForm = <T extends Record<string, string>>({
  fields,
  onSubmit,
  action,
  method,
  className, // This is for the <form> element
  buttonText = 'Submit',
  fieldItemClassName, // NEW: Receive field item class
  labelClassName,     // NEW: Receive label class
  inputClassName,     // NEW: Receive input class
  buttonWrapperRowClass,
}: FormFieldTypes<T>) => {
  // Manage form data with state
  const [formData, setFormData] = useState(() => {
    const initialData = {} as T;
    fields.forEach((field: FieldConfig) => {
      initialData[field.name as keyof T] = '' as T[keyof T];
    });
    return initialData;
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData(prevData =>({ 
      ...prevData, 
      [name]: value 
    }));
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    // process formData
    console.log(formData);
  };

  return (
    <form className={className} action={action} method={method} onSubmit={handleSubmit}>
      {fields.map((field: FieldConfig) => (
        <FormField 
          key={field.name}
          label={field.label}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          value={formData[field.name] || ''}
          onChange={handleChange}
          fieldItemClassName={fieldItemClassName}
          labelClassName={labelClassName}
          inputClassName={inputClassName}
          rowClass={field.rowClass}
        />
      ))}
      {/* Submit Button */}
      {/* multiple classes */}
      <div className={`${fieldItemClassName || ''} ${buttonWrapperRowClass || ''}`}> 
        <Button variant='primary' cta={buttonText} />
      </div>
    </form>
  );
};

export default DynamicForm;