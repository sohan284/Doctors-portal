import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className='btn btn-primary  bg-gradient-to-r from-success to-[#04afdf] text-white'>{children}</button>
        </div>
    );
};

export default PrimaryButton;