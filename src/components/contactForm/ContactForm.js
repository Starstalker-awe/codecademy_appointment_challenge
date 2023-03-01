import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const handleChange = (ev, func) => func(ev.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onInput={e => handleChange(e, setName)} value={name} placeholder="Name" />
      <input type="tel" name="phone" onInput={e => handleChange(e, setPhone)} value={phone} placeholder="Phone (XXX-XXX-XXXX)" pattern="^[2-9]\d{2}-\d{3}-\d{4}$" />
      <input type="email" name="email" onInput={e => handleChange(e, setEmail)} value={email} placeholder="Email" />
      <button type="submit">Create a New Contact</button>
    </form>
  );
};
