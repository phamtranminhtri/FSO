const Filter = (props) => {
  const { filter, handleChange } = props
  return (
    <div>
      Filter shown with <input value={filter} onChange={handleChange} />
    </div>
  )
}

export default Filter