import { useState } from "react"

// Calling a function that changes the state causes the component to re-render

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => {
    console.log(counter)
    setCounter(counter + 1)
  }
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  console.log("rendering...", counter)

  return (
    <div>
      <Display counter={counter} />
      <Button
        onClick={increaseByOne}
        text="plus"
      />
      <Button
        onClick={setToZero}
        text="zero"
      />
      <Button
        onClick={decreaseByOne}
        text="minus"
      />
    </div>
  )
}

export default App