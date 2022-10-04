import React from 'react'
import '../../asset/admin/css/styles.css';
import '../../asset/admin/js/scripts.js';


import Footer from './Footer';
import Navbar from './Navbar'
import Sidebar from './Sidebar';

import routes from '../../routes/routes'
import { Routes , Route } from 'react-router-dom';

const MasterLayout = () => {

    return(

        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">

                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>

                <div id="layoutSidenav_content">
                    <main>
                        main content
                        <Routes>
                            {routes.map((route, idx) => {
                                return (
                                    route.component && (
                                        <Route 
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={(props) => (
                                                <route.component {...props} />
                                            )}
                                        />
                                    )
                                )
                            })}
                        </Routes>

                    </main>
                    <Footer />
                </div>

            </div>
        </div>

    )
        
    
}
export default MasterLayout;