const Persons = ({ persons, handleDelete }) => {
  return (
    <div>
      {persons.map(person =>
        <PersonDetails key={person.id} person={person} handleDelete={() => handleDelete(person.id)} />
      )}
    </div>
  )
}

const PersonDetails = (props) => {
  const { person, handleDelete } = props
  return (
    <div>
      {person.name} {person.number}
      <button onClick={handleDelete}>delete</button>
    </div>
  )
}

export default Persons