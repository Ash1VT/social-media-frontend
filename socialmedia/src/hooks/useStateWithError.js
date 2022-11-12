import { useState } from "react"

const useStateWithError = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    const [valueError, setValueError] = useState(initialValue)
    
    return [value, valueError, setValue, setValueError]
}

export default useStateWithError;
