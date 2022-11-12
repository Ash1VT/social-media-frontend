import { useState } from "react"

const useRequest = (callback) => {
    const [loading, setLoading] = useState(false);

    const request = async () => {
        setLoading(true)
        const response = await callback();
        // Wait 1000 for testing (remove later)
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        setLoading(false)
        return response;
    }

    return [loading, request]
}

export default useRequest;
