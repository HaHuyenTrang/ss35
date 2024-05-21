import React, { useState } from 'react';

function Toggle() {
    const [value, setValue] = useState(false);

    const toggle = () => {
        setValue(!value);
    };

    return (
        <div>
            <button onClick={toggle}>
                {value ? 'Ẩn' : 'Hiện'}
            </button>
            {value && <p>Tiêu đề văn bản</p>}
        </div>
    );
}

export default Toggle;
