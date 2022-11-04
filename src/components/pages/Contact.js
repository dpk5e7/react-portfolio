import { useState } from "react";

export default function Contact() {
  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`${inputs} + ${message}`);
  };

  return (
    <div class="sections">
      <section id="Contact">
        <h2>Contact</h2>
        <p>
          <form onSubmit={handleSubmit}>
            <label for="name">Name:</label>
            <br />
            <input
              type="text"
              id="name"
              value={inputs.name || ""}
              onChange={handleChange}
            />

            <br />
            <label for="email">Email:</label>
            <br />
            <input
              type="text"
              id="email"
              value={inputs.email || ""}
              onChange={handleChange}
            />

            <br />
            <label for="message">Message:</label>
            <br />
            <textarea id="message" value={message} onChange={handleMessageChange} rows="10" />

            <br />
            <input type="submit" text="Submit" />
          </form>
        </p>
      </section>
    </div>
  );
}
