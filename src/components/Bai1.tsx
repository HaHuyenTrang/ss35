import React, { useState } from 'react';

interface Props {
}

const FullName: React.FC<Props> = () => {
    const [name, setName] = useState<string>('Hà Huyền Trang');

    return (
        <div>
            <p>Full name: {name}</p>
        </div>
    );
}

export default FullName;
