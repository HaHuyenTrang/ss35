import React, { useState } from 'react';

function ChangeColor() {
    const [color, setColor] = useState('black');

    const Color = () => {
        setColor(color === 'black' ? 'red' : 'black');
    };

    return (
        <div>
            <p style={{ color: color }}>Tiêu đề văn bản</p>
            <button onClick={Color}> màu</button>
        </div>
    );
}

export default ChangeColor;
