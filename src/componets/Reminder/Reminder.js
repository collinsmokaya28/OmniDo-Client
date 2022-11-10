import { useState } from "react";
import { data } from "./Birthday-data";
import "./Reminder.css";

function Reminder() {
  const [people, setPeople] = useState(data);
  const [userName, setUserName] = useState([]);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  const removePerson = (id) => {
    let newPerson = people.filter((person) => person.id !== id);
    setPeople(newPerson);
  };

  return (
    <div>
      <h3
        style={{
          backgroundColor: "#fff",
          color: "#000000",
          textAlign: "center",
          fontSize: "35px",
          marginTop: "50px",
        }}
      >
        {people.length} Pending Birthdays
      </h3>
      <form>
        <label>
          <input
            type="text"
            value={userName}
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>

        <button className="button" onClick={() => setUserName(userName)}>
          Add Birthday
        </button>
      </form>

      {people.map((person) => {
        const { id, name, image } = person;

        return (
          <div className="container" key={id}>
            <div className="avatar">
              <img src={image} alt={name} />
              <h3>{name}</h3>
            </div>
            <div className="button">
              <button className="btn delete" onClick={() => removePerson(id)}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Reminder;
