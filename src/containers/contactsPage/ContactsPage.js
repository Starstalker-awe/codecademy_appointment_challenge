import React from "react";
import { TileList } from "../../components/tileList/TileList";
import { ContactForm } from "../../components/contactForm/ContactForm";

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const formProps = {/*name,*/ phone, email, /*setName,*/ setPhone, setEmail};

  const [duplicate, setDuplicate] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addContact({ name, phone, email });
      setName(''); setPhone(''); setEmail('');
    }
  };

  React.useEffect(() => {
    setDuplicate(
      contacts.filter(( val ) => {
        return val.name === name
      }).length > 0
    )
  }, [name, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {duplicate && 
          <h3 style={{
            textAlign: 'center', 
            color: 'red'
          }}>You've already used this name!</h3>}
        <ContactForm
          {...formProps}
          name={name}
          setName={setName}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList items={contacts} />
      </section>
    </div>
  );
};
