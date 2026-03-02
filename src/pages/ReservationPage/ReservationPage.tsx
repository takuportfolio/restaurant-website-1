import React from 'react';

// Components
import FindTableForm from '../../components/Common/Form/FindTableForm';

// Style
import styles from './ReservationPage.module.scss';

const ReservationPage: React.FC = () => {
  return (
    <>
      {/* Reservation Page */}
      <section className={styles.reservationPage}>
        <div className={styles.reservationPage__container}>
          {/* Content */}
          <header className={styles.reservationPage__header}>
            <h3 className={styles.reservationPage__heading}>Reservations</h3>
            {/* Separator */}
            <div className="separator--sm"></div>
          </header>
          {/* Reservation Form */}
          <div className={styles.formContainer}>
            <FindTableForm
              className={styles.form}                      // Applies to the <form> element
              fieldItemClassName={styles.form__fieldItem} // Applies to each <fieldset>
              labelClassName={styles.form__label}           // Applies to each <label>
              inputClassName={styles.form__input}           // Applies to each <input>
              formRowFullClassName={styles['form__row--full']} // For specific fields
              buttonWrapperRowClass={styles['form__row--full']} // NEW: For the button wrapper
              buttonText="Find A Table" // Pass the button text
            />
          </div>
          <div className={styles.reservationPage__footer}>
            <p className={styles.reservationPage__footerText}>Our award-winning cuisine, our stunning city views, our family-friendly atmosphere</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ReservationPage;