import React from "react";

export const ContactPicker = ({ contacts, setContact }) => {
  return (
    <select onChange={setContact}>
      <option selected disabled value="">-- No Contact --</option>
      {contacts.map( c => 
        <option value={c.name}>{c.name}</option>
      )}
    </select>
  );
};
