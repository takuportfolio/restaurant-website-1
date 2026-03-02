import React from 'react';
// Component
import ReservationForm from '../../Common/Form/ReservationForm';
// style
import styles from './BookATable.module.scss';

const BookATable: React.FC = () => (
  <section className={styles.bookingForm}>
    <div className={styles.bookingForm__container}>
      {/* Content */}
      <div className={styles.bookingForm__content}>
        <h3 className={styles.bookingForm__heading}>Reserve Your Spot at <br />LaidBack</h3>
        {/* Separator */}
        <div className="separator--sm"></div>
        <p className={styles.bookingForm__description}>Our award-winning cuisine, our stunning city views, our family-friendly atmosphere</p>
      </div>
      {/* Reservation Form */}
      <div className={styles.formContainer}>
        <div className={styles.formContainer__content}>
          <h5 className={styles.formContainer__heading}>Book a Table</h5>
          <p className={styles.formContainer__text}>Meet our delicious food and welcoming atmosphere. </p>
        </div>
        <ReservationForm
          className={styles.form}                      // Applies to the <form> element
          fieldItemClassName={styles.form__fieldItem} // Applies to each <fieldset>
          labelClassName={styles.form__label}           // Applies to each <label>
          inputClassName={styles.form__input}           // Applies to each <input>
          formRowFullClassName={styles['form__row--full']} // For specific fields
          buttonWrapperRowClass={styles['form__row--full']} // NEW: For the button wrapper
          buttonText="Booking now!" // Pass the button text
        />
      </div>
    </div>
  </section>
);

export default BookATable;