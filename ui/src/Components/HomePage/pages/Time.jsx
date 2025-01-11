import React, { useState, useEffect } from 'react';

export default function Time() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className='d-inline small w-100 text-uppercase'> 
            {currentTime.toLocaleTimeString()}
        </div>
    );
}
