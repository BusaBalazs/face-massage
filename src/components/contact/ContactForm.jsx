import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import ContactModal from "./ContactModal";
import classes from "./ContactForm.module.css";

//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
const ContactForm = () => {
  const formRef = useRef();
  const dialog = useRef();
  const [loading, setloading] = useState(false);
  const [formIsValis, setFormIsValid] = useState(true);

  const [form, setform] = useState({
    name: "",
    email: "",
    phone: "",
  });

  //----------------------------------------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    setform((prevSate) => {
      return {
        ...prevSate,
        [name]: value,
      };
    });
  };

  //----------------------------------------------------------
  const handleModal = () => {
    if (form.name.trim() === "" || form.phone.trim().length < 9) {
      setFormIsValid(false);

      setTimeout(() => {
        setFormIsValid(true);
      }, 3000);
      return;
    }

    const isValidEmail = form.email
      .split("")
      .filter((letter) => letter === "@");
    if (isValidEmail.length === 0) {
      setFormIsValid(false);

      setTimeout(() => {
        setFormIsValid(true);
      }, 3000);
      return;
    }

    dialog.current.open();
  };

  //----------------------------------------------------------
  const handleCancelModal = () => {
    dialog.current.close();
  };

  //----------------------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);

    console.log(form);

    setloading(false);
    setform({
      name: "",
      email: "",
      phone: "",
    });

    dialog.current.close();
  };

  return (
    <>
      <ContactModal
        ref={dialog}
        onSubmit={handleSubmit}
        buttonText={loading ? "Küldés..." : "Rendben"}
        onCancel={handleCancelModal}
        name={form.name}
        email={form.email}
        phone={form.phone}
      />
      <div className={classes["contact-wrapper"]}>
        <p className={classes["contact-title"]}>Visszahívást kérek!</p>

        {!formIsValis && (
          <p className={classes["alert"]}>
            Kérem ellenőrizze a megadott adatokat, a mezők kitöltése kötelező!
          </p>
        )}
        <form ref={formRef} className={classes["input-form"]}>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Név"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="email@email"
            required
          />

          <input
            name="phone"
            type="tel"
            minLength="9"
            value={form.phone}
            onChange={handleChange}
            placeholder="Telefonszám"
            required
          />

          <button type="button" onClick={handleModal}>
            Küldés
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
