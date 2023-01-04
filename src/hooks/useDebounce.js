import { useState, useEffect } from "react";

function UseDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handeler = setTimeout(() => setDebouncedValue(value), delay)

        return () => clearTimeout(handeler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])



    return debouncedValue;
}

export default UseDebounce;


