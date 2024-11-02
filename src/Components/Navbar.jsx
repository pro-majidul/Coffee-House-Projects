import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-white backdrop-blur-lg text-black">
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
                        <Link to='/'>Home</Link>
                        <Link to='/coffees'>Coffees</Link>
                        <Link to='/dashboard'>Dashboard</Link>
                    </ul>
                </div>
                <Link to='/'>COOK_BOOK</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6">
                    <Link to='/'>Home</Link>
                    <Link to='/coffees'>Coffees</Link>
                    <Link to='/dashboard'>Dashboard</Link>
                </ul>
            </div>
           
        </div>
    );
};

export default Navbar;