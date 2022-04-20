import React, {useState, useEffect, useRef} from "react";

const setDefaultValue = () => {
    const userCount = localStorage.getItem('count')
    return userCount ? +userCount : 0;
}

const Timer = () => {

    const [count, setCount] = useState(setDefaultValue());
    const [isCount, setIsCount] = useState(false);
    const timerIdRef = useRef(null);

    const timerStart = () => {
        setIsCount(true);
    };

    const timerStop = () => {
        setIsCount(false);
    };
    const timerReset = () => {
        setCount(0);
        setIsCount(false);
    };

    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);

    useEffect(() => {
        if(isCount) {
            timerIdRef.current = setInterval(() => {
            setCount((prevCount) => prevCount + 1)
        }, 1000)
    }
        return () => {
            timerIdRef.current && clearInterval(timerIdRef.current);
            timerIdRef.current = null;
        }
    }, [isCount])

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={timerStart}>Start</button>
            <button onClick={timerStop}>Stop</button>
            <button onClick={timerReset}>Reset</button>
        </div>
    )
}

export default Timer;
