import { Link } from 'react-router-dom';
import './bg.css';
import logo from '../../../assets/CardImage/v-removebg-preview.png';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { toast } from 'react-hot-toast'

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext);

    const handleLogOut = () => {
        LogOut()
            .then(() => {
                toast.success(<p className='text-orange-500'> Log Out Successful!</p>)
            })
            .catch(error => console.log(error))
    }

    const navOption =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/appointment'>Appointment</Link></li>
            {user ?
                <>
                    <li><Link onClick={handleLogOut} to='/login'>Log Out</Link></li>
                    <li><Link to='/'>{user?.displayName}</Link></li>
                </>
                :
                <li><Link to='/login'>Login</Link></li>
            }
        </>
    return (
        <div className='bg-indigo-600 pb-12'>
            <div className="navbar justify-between max-w-screen-xl mx-auto pt-9">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu text-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-3xl">
                        <img className='w-8 h-8' src={logo} alt="" />
                        <span className='text-red-500'>Doctor</span>
                        <span className='text-white'>Village</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-white menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;