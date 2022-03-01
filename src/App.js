import "./App.css";
import contactsJSON from "./contacts.json";
import { useState } from 'react';


function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0,5));

  const addRandom = () => {
    const index = Math.floor(Math.random() * contactsJSON.length);
    const randomContact = contactsJSON[index];
    contactsJSON.slice(index, 1);
    setContacts([randomContact, ...contacts]);
  };

  const sortByPopularity = () => {
    setContacts([...contacts.sort((a, b) => {
      return a.popularity > b.popularity ? -1 : 1
   })]);
    
  };

  const sortByName = () => {
    setContacts([...contacts.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      } else {
        return 1;
      }
    })]);

  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return <div className="App">
    <h1>IronContacts</h1>
    <button className="Btn" onClick={addRandom}>Add Random Contact</button>
    <button className="Btn" onClick={sortByPopularity}>Sort by popularity</button>
    <button className="Btn" onClick={sortByName}>Sort by name</button>
      <table>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Won an Oscar</th>
      <th>Won an Emmy</th>
    </tr>
    {contacts.map((contact) => {
      return (
        <tr>
          <td><img src={contact.pictureUrl} alt="avatar" /> </td>
          <td><p>{contact.name}</p></td>
          <td><p>{contact.popularity.toFixed(2)}</p></td>
          <td>{contact.wonOscar && <p>🏆</p>}</td>
          <td>{contact.wonEmmy ? "🏆" : ""}</td>
          <td className="deleteBtnTd"><button className="Btn" onClick={() => deleteContact(contact.id)}>Delete</button></td>
        </tr>
      )
    })}
      </table>


  </div>;
}

export default App;
