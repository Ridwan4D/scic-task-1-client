import { TbCoinTaka } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Nav = () => {
    const nabLinks = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/service">Service</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/history">History</NavLink></li>

    </>
    return (
        <div className="bg-[#e2136e] text-white">
            <div className="navbar bg-transparent max-w-7xl mx-auto" id="navbar">
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
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow text-black bg-gray-400">
                            {nabLinks}
                            <li className="ml-3">Balance: 700 <TbCoinTaka className="ml-1 text-xl text-white" /></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font_cursive">MFS <sub>Transaction</sub></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        {nabLinks}
                    </ul>
                </div>
                <div className="hidden md:flex navbar-end">
                    Balance: 700 <TbCoinTaka className="ml-1 text-xl" />
                </div>
            </div>
        </div>
    );
};

export default Nav;