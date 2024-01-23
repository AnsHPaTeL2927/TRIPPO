import { useState } from "react";
import "./css/Contact.css";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);

  const [useData, setUserData] = useState(true);

  const { user } = useAuth();

  if (useData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    // console.log(contact);

    try {
      const response = await fetch(`http://localhost:5000/TRIPPO/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        toast.success("Message send successfully");
      }
    } catch (error) {
      console.log(`Error from Contact Page ${error}`);
    }
  };
  return (
    <>
      <div className="contact-body">
        <div className="contact-head">
          <div className="c-heading">
            <div className="container-contact">
              <h1>Drop your message here</h1>
              <form onSubmit={handleSubmit}>
                <div className="field" tabIndex="1">
                  <label htmlFor="username">
                    <i className="far fa-user"></i>
                    <b>Your Name</b>
                  </label>
                  <input
                    name="username"
                    type="text"
                    // placeholder="e.g. john doe"
                    id="username"
                    value={contact.username}
                    onChange={handleInput}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="field" tabIndex="2">
                  <label htmlFor="email">
                    <i className="far fa-envelope"></i>
                    <b>Your Email</b>
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    autoComplete="off"
                    // placeholder="Enter Your Email"
                    value={contact.email}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="field" tabIndex="3">
                  <label htmlFor="message">
                    <i className="far fa-edit"></i>
                    <b>Your Message</b>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="type here"
                    value={contact.message}
                    onChange={handleInput}
                    required
                  ></textarea>
                </div>
                <button className="btn-contact" type="submit">
                  Send Me Message
                </button>
              </form>
            </div>
          </div>
          <div className="c-logo">
            <img src="\images\Blue_Wood-removebg-preview.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
