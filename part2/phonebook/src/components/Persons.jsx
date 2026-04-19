const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map(person =>
        <PersonDetails name={person.name} number={person.number} key={person.id} />
      )}
    </div>
  )
}

const PersonDetails = (props) => {
  const { name, number } = props
  return (
    <div>{name} {number}</div>
  )
}

export default Persons