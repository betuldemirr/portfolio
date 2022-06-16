import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div name="contact" className="contactContainer">
      <form method="POST" action="https://getform.io/f/788047a5-d933-4953-8f80-30c7605f474a" className="formContainer">
        <div className="formText">
          <p className="formTitle">Contact</p>
          <p>
            // Write the form below or send it to this email:
            betuldemir.007@gmail.com
          </p>
        </div>
        <div className="formMessage">
          <input required type="text" placeholder="Name" name="name" />
          <input required type="email" placeholder="Email" name="email" />
          <textarea
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Let's Collaborate</button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
