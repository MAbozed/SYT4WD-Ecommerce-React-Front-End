import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar';

const MasterLayout = () => {
    return(

        <div className='sb-nav-fixed'>
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>
            </div>
        </div>

    )
        
    
}
export default MasterLayout;