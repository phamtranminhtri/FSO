import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const App = () => {
  const [value, setValue] = useState(10)

  // const hello = (who) => {
  //   const handler = () => {
  //     console.log("hello", who)
  //   }
  //   return handler
  // }

  const hello = (who) => () => {
    console.log("hello", who)
  }

  const setToValue = (newValue) => () => {
    console.log("value now:", newValue)
    setValue(newValue)
  }

  const setToValue2 = (newValue) => {
    console.log("value now:", newValue)
    setValue(newValue)
  }

  return (
    <div>
      {value}
      <button onClick={hello("world")}>button</button>
      <button onClick={hello("react")}>button</button>
      <button onClick={hello("function")}>button</button>
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
      <Button onClick={() => setToValue2(1000)} text="thousand"/>
      <Button onClick={() => setToValue2(0)} text="zero"/>
      <Button onClick={() => setToValue2(value + 1)} text="incre"/>

    </div>
  )
}

export default App
