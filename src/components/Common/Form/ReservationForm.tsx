// components/Forms/ReservationForm.tsx
import React from 'react';
import DynamicForm from './DynamicForm';
import type { FieldConfig } from '../../../types/formType';
// REMOVE: import styles from './ReservationForm.module.scss'; if not needed here

interface ReservationFormData {
  name: string;
  phone: string;
  address: string;
  guests: string;
  date: string;
  [key: string]: string;
}

interface ReservationFormProps {
  className?: string;
  fieldItemClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  buttonText?: string;
  formRowFullClassName?: string; // NEW: Prop to receive the 'form__row--full' class
  buttonWrapperRowClass?: string;
}

// reservationFields will now be a function that takes formRowFullClassName
// so that it can be applied to the relevant fields.
const getReservationFields = (formRowFullClassName?: string): FieldConfig[] => [
  { label: 'Name', name: 'name', type: 'text', placeholder: 'Name', rowClass: formRowFullClassName }, // Use the prop
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: 'Phone' },
  { label: 'Address', name: 'address', type: 'text', placeholder: 'Address' },
  { label: 'Number of guests', name: 'guests', type: 'number', placeholder: 'Number of guests' },
  { label: 'Date', name: 'date', type: 'date', placeholder: 'YYYY-MM-DD' }, // Use the prop
];

const ReservationForm: React.FC<ReservationFormProps> = ({
  className,
  fieldItemClassName,
  labelClassName,
  inputClassName,
  buttonText = 'Booking now!',
  formRowFullClassName, // NEW: Destructure the new prop
  buttonWrapperRowClass,
}) => {
  const handleReservationSubmit = (data: ReservationFormData) => {
    console.log('Reservation data:', data);
  };

  // Call getReservationFields to get the fields with the correct rowClass applied
  const reservationFields = getReservationFields(formRowFullClassName);

  return (
    <DynamicForm<ReservationFormData>
      fields={reservationFields} // Use the dynamically created fields
      onSubmit={handleReservationSubmit}
      buttonText={buttonText}
      className={className}
      fieldItemClassName={fieldItemClassName}
      labelClassName={labelClassName}
      inputClassName={inputClassName}
      buttonWrapperRowClass={buttonWrapperRowClass}
    />
  );
};

export default ReservationForm;