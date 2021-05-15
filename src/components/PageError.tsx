import React from 'react';

import './styles/PageError.css';

type msError = {error: any};

const PageError: React.FC<msError> = (error) => {
    return (
        <div className="PageError">
            ❌{error.error.message}🥺
        </div>
    );
}

export default PageError;