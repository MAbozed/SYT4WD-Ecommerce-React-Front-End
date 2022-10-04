
import Profile from '../components/admin/Profile';
import Dashboard from '../components/admin/Dashboard';

const routes = [
    {path: '/admin', exact:true, name: 'Admin'},
    {path: '/admin/dashboard', exact:true, name: 'Dashboard' , element: Dashboard},
    {path: '/admin/profile', exact:true, name: 'Profile', element: Profile},
];


export default routes;