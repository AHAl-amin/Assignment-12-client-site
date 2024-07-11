import React from 'react';

const SectionsTitle = ({heading}) => {
    return (
        <div>
            <div className='my-5 text-center w-2/3 md:w-4/12 mx-auto'>

                <h2 className='  py-3 my-4 border-b-4 uppercase text-2xl md:text-4xl'>{heading}</h2>

            </div>

        </div>
    );
};

export default SectionsTitle;
