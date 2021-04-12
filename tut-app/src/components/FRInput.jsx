import React from 'react';

const FRInput = React.forwardRef(  
    (props,ref) =>   {
        return (
        <>
        <div>FRInput</div>        
        <input type = 'text' ref = {ref} />
        </>
        )

    }
)

export default FRInput;
