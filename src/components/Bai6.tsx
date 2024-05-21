import React, { useState } from 'react';

const num: React.FC = () => {
    // State to store the count value
    const [count, setCount] = useState<number>(0);

    // Function to increment the count
    const number = (): void => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Bạn đã click {count} lần</p>
            <button onClick={number}>Click để tăng số lần click</button>
        </div>
    );
}

export default num;
