import { useState } from "react";

export function Clock() {
    const [hour , setHour] = useState('');

    setInterval(() => {
        const date = new Date();
        setHour(date.toLocaleTimeString());
    }, 1000);

    return (
        <div className="clock">
            <h1>{hour}</h1>
        </div>
    );
}