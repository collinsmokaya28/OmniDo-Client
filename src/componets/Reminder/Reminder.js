import { useState } from 'react'
import { data } from './Birthday-data'
import './Reminder.css'

function Reminder() {
  const [people, setPeople] = useState(data)

  const removePerson = (id) => {
    let newPerson = people.filter((person) => person.id !== id)
    setPeople(newPerson)
  }

  return (
    <>
      <h3
        style={{
          backgroundColor: '#fff',
          color: '#313174',
          textAlign: 'center',
          fontSize: '36px',
          marginTop: '70px'
        }}
      >
        {people.length} Todays Birthdays
      </h3>
      {people.map((person) => {
        const { id, name, image } = person

        return (
          <div className='container' key={id}>
            <div className='avatar'>
              <img src={image} alt={name} />
              <h3>{name}</h3>
            </div>
            <div className='button'>
              <button className='btn delete' onClick={() => removePerson(id)}>
                Delete
              </button>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Reminder;