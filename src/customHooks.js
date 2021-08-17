import { useState } from "react"

function useCounter() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    return { count, increment }

    //initialize state
    //create any functions we need for modifying the state
    //return whatever we want another component to have acces to (count, increment)
}

export default useCounter

//in App.js, destructure using:
const { count, increment } = useCounter()

