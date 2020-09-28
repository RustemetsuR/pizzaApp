import React from 'react';
import Toolbar from '../Toolbar/Toolbar';

const Layout = props => {
    return (
        <>
            <Toolbar/>
            <div>
                {props.children}
            </div>
        </>
    );
};

export default Layout;