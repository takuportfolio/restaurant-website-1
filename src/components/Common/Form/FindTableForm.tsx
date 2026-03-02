import React from 'react';
import DynamicForm from './DynamicForm';
import type { FieldConfig } from '../../../types/formType';

interface FindTableFormData {
  people: string;
  date: string;
  time: string;
  [key: string]: string;
};

interface FindTableFormProps {
  className?: string;
  fieldItemClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  buttonText?: string;
  formRowFullClassName?: string; // NEW: Prop to receive the 'form__row--full' class
  buttonWrapperRowClass?: string;
}

const getFindTableFields = (formRowFullClassName?: string): FieldConfig[] => [
  { label: 'Number of people', name: 'people', type: 'number', placeholder: 'Number of people', rowClass: formRowFullClassName },
  { label: 'Date', name: 'date', type: 'date', placeholder: 'dd/mm/yyyy', rowClass: formRowFullClassName },
  { label: 'Time', name: 'time', type: 'time', placeholder: '--:--', rowClass: formRowFullClassName },
];

const FindTableForm: React.FC<FindTableFormProps> = ({
  className,
  fieldItemClassName,
  labelClassName,
  inputClassName,
  buttonText = 'Find A Table',
  formRowFullClassName, // NEW: Destructure the new prop
  buttonWrapperRowClass,
}) => {
  const findTableFields = getFindTableFields(formRowFullClassName);

  const handleFindTableSubmit = (data: FindTableFormData) => {
    console.log('Find table data:', data);
  };

  return (
    <DynamicForm<FindTableFormData>
    fields={findTableFields} // Use the dynamically created fields
    onSubmit={handleFindTableSubmit}
    buttonText={buttonText}
    className={className}
    fieldItemClassName={fieldItemClassName}
    labelClassName={labelClassName}
    inputClassName={inputClassName}
    buttonWrapperRowClass={buttonWrapperRowClass}
  />
  );
};

export default FindTableForm;