import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";


import classes from "./ContactForm.module.css";

//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
const ContactForm = () => {
  const formRef = useRef();
  const [loading, setloading] = useState(false);
  const [formIsValis, setFormIsValid] = useState(true);

  const [form, setform] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setform((prevSate) => {
      return {
        ...prevSate,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);

    if (form.name.trim() === "") {
      setFormIsValid(false);
      setloading(false);
      setTimeout(() => {
        setFormIsValid(true);
      }, 2000);
      return;
    }

    setloading(false);
    setform({
      name: "",
      email: "",
      phone: "",
    });
  };

 
  return (
    <div className={classes["contact-wrapper"]}>
      <p className={classes["contact-title"]}>Visszahívom!</p>
      
      {!formIsValis && (
        <p className={classes["alert"]}>
          Kérem ellenőrizze a megadott adatokat!
        </p>
      )}
      <form ref={formRef} onSubmit={handleSubmit}>
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
          type="number"
          value={form.phone}
          onChange={handleChange}
          placeholder="Telefonszám"
          required
        />

        <button type="submit">{loading ? "Küldés..." : "Küldés"}</button>
      </form>
    </div>
  );
};

export default ContactForm;
