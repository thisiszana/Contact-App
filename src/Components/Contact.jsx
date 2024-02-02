import { useState } from "react";
import { v4 } from "uuid";

import inputs from "../Constant/input.js";
import ContactList from "./ContactList";

import styles from "./Contact.module.css";

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({ ...contact, [name]: value });
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.email ||
      !contact.lastName ||
      !contact.phone
    ) {
      setAlert("Please enter a valid data");
      return;
    }

    setAlert("");
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      name: "",
      email: "",
      lastName: "",
      phone: "",
    });
  };

  const deleteHandler = id => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}
        <button onClick={addHandler}>Add Contact</button>
      </div>
        <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
      <ContactList contacts={contacts} deleteHandler={deleteHandler}/>
    </div>
  );
}

export default Contact;
