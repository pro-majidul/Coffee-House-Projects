import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar  backdrop-blur-2xl text-black z-50 fixed top-0 py-6 px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to='/'
                            className={({ isActive }) => ` ${isActive ? 'text-warning ' : 'hover:text-warning'}`}>Home</NavLink>
                        <NavLink to='/coffees' className={({ isActive }) => ` ${isActive ? 'text-warning ' : 'hover:text-warning'}`}>Coffees</NavLink>
                        <NavLink to='/dashboard' className={({ isActive }) => ` ${isActive ? 'text-warning ' : 'hover:text-warning'}`}>Dashboard</NavLink>
                    </ul>
                </div>
                <NavLink to='/' className='font-bold text-xl hover:text-warning'>COOK_BOOK</NavLink>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6">
                    <NavLink to='/' className={({ isActive }) => `font-semibold text-lg ${isActive ? 'text-warning ' : 'hover:text-warning'}`}>Home</NavLink>
                    <NavLink to='/coffees' className={({ isActive }) => ` font-semibold text-lg ${isActive ? 'text-warning ' : 'hover:text-warning'}`}>Coffees</NavLink>
                    <NavLink to='/dashboard' className={({ isActive }) => `font-semibold text-lg ${isActive ? 'text-warning ' : 'hover:text-warning'}`}>Dashboard</NavLink>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;