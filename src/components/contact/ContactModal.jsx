import React, { forwardRef, useRef, useImperativeHandle } from "react";

import classes from "./ContactModal.module.css";
//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------
const ContactModal = forwardRef(
  ({ onSubmit, name, email, phone, buttonText, onCancel }, ref) => {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
        },
        close() {
          dialog.current.close();
        },
      };
    });

    return (
      <dialog ref={dialog} className={classes.modal}>
        <div className={classes["modal-greating"]}>
          <h3>Köszönöm az érdeklődését!</h3>
          <p>Az adatok elleneőrzése után, a "Rendben" gombal véglegesítheti az üzenet küldést.</p>
          <p>Amint lehetséges felszem Önnel a kapcsolatot.</p>
        </div>
        <div className={classes["modal-content-wrapper"]}>
          <h2>Kérem ellenőrizze az adatait!</h2>
          <div className={classes["modal-user-data"]}>
            <div>
              <span>Név: </span>
              {name}
            </div>
            <div>
              <span>e-mail: </span>
              {email}
            </div>
            <div>
              <span>Telefonszám: </span>
              {phone}
            </div>
          </div>
          <form method="dialog" onSubmit={onSubmit}>
            <button
              className={classes["cancel-btn"]}
              type="button"
              onClick={onCancel}
            >
              Vissza
            </button>
            <button type="submit">{buttonText}</button>
          </form>
        </div>
      </dialog>
    );
  }
);

export default ContactModal;
