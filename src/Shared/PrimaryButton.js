import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className='btn bg-gradient-to-r from bg-doctors text-white'>{children}</button>
        </div>
    );
};

export default PrimaryButton;