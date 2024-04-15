import React, { useState } from "react";
import "./Contact.css";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8000/api/createContact/submitContactUsForm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Form submitted successfully");
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      } else {
        setErrorMessage(data.error || "Error submitting form");
      }
    } catch (error) {
      setErrorMessage("Network error occurred");
      console.error("Fetch error:", error);
    }
  };

  return (
    <>
      <section id="contact">
        <div className="contact-container container">
          

          <div className="form-container">
            <h2>Contact Us</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              cols="30"
              rows="6"
              placeholder="Type Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary"
            >
              Submit
            </button>
            {successMessage && (
              <p style={{ color: "green" }}>{successMessage}</p>
            )}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
