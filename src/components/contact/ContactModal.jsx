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
          <button className={classes["cancel-btn"]} type="button" onClick={onCancel}>
            Vissza
          </button>
          <button type="submit">{buttonText}</button>
        </form>
      </dialog>
    );
  }
);

export default ContactModal;
