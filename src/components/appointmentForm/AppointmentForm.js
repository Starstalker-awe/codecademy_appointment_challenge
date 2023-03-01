import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  const handleChange = (ev, func) => func(ev.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" onInput={e => handleChange(e, setTitle)} value={title} />
      <input type="date" name="date" onInput={e => handleChange(e, setDate)} value={date} min={getTodayString()} />
      <input type="time" name="time" onInput={e => handleChange(e, setTime)} value={time} />
      <ContactPicker contacts={contacts} setContact={e => handleChange(e, setContact)} />
      <button type="submit">Create a New Appointment</button>
    </form>
  );
};
