import { useState } from "react";
import inputs from "../Constant/input.js";

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
    if (!contact.name || !contact.email || !contact.lastName || !contact.phone) {
      setAlert("Please enter a valid data");
      return;
    }

    setAlert("");
    setContacts((contacts) => [...contacts, contact]);
    setContact({
      name: "",
      email: "",
      lastName: "",
      phone: "",
    })
  };

  return (
    <div>
      <div>
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
        <div>{alert && <p>{alert}</p>}</div>
        <button onClick={addHandler}>Add Contact</button>
      </div>
    </div>
  );
}

export default Contact;
