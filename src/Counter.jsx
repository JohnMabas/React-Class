import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

    function increase () {
        setCount(count + 1)
        
    }

    function decrease () {
        setCount(count - 1)
        
    }

    function reset () {
        setCount(0)
        
    }
  return (
    <div>
        <p>{count}</p>
        <button onClick={increase}>button </button>

      
    </div>
  )
}

export default Counter
