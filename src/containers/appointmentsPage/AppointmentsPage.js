import React from "react";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm'
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, addAppointment }) => {
  const [title, setTitle] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [date, setDate] = React.useState(null);
  const [time, setTime] = React.useState("");
  const formProps = {title, contact, date, time, setTitle, setContact, setDate, setTime};

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({ title, contact, date, time });
    setTitle(""); setContact(""); setDate(""); setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          {...formProps} 
          handleSubmit={handleSubmit} 
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList items={appointments} />
      </section>
    </div>
  );
};
