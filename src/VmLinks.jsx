import React from 'react';
import {Link} from 'react-router-dom';


const VmLinks = () => {
    return (
        <div>
            <p>Go to <Link to='/apple'>Apple</Link> <Link/></p>
            <p>Go to <Link to='/Soda'>Soda</Link> <Link/></p>
            <p>Go to <Link to='/Chips'>Chips</Link> <Link/></p>
        </div>
    );
}

export default VmLinks;
