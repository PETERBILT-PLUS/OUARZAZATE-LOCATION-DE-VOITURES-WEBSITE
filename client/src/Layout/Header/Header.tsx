import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdOutlinePlaylistRemove } from "react-icons/md";
import LOGO from "../../assets/LOGO.png";
import "./Header.css";



function Header() {
    const [state, setState] = useState<boolean>(false);

    return (
        <header className="bg-white shadow-md">

            <div className="header-top w-full py-2">
                <div className="container mx-auto flex flex-row justify-between items-center px-4">
                    <div className="flex flex-row items-center gap-6">
                        <h2 className="text-white text-base"><span className="span-top">Tél: </span>0624736590</h2>
                        <h3 className="text-white text-base"><span className="span-top">E-mail: </span> email@gmail.com</h3>
                    </div>
                    <div className="text-white text-base hidden md:flex flex-row justify-evenly items-center gap-5">
                        <span>Suivez-nous:</span>
                        <div className="flex flex-row justify-evenly items-center gap-3">
                            <a href="https://www.facebook.com/Your.Locationn?mibextid=LQQJ4d" target="_blank"><FaFacebook size={19} /></a>
                            <a href="https://www.instagram.com/yourlocation_ouarzazate?igsh=cXNta21rYnR5OG03" target="_blank"><FaInstagram size={19} /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="header-bottom container mx-auto py-5 flex flex-row justify-between items-center px-4">
                <div className="flex items-center">
                    <Link to="/">
                        <h1 className="text-3xl font-bold cursor-pointer">
                            <img className="h-16 rounded" src={LOGO} alt="LOGO" />
                        </h1>
                    </Link>
                </div>
                <nav className="hidden lg:flex flex-row justify-center items-center gap-12 mt-4 md:mt-0">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Accueil</NavLink>
                    <NavLink to="/nos-voitures" className={({ isActive }) => (isActive ? "active" : "")}>Nos Voitures</NavLink>
                    <NavLink to="/a-propos" className={({ isActive }) => (isActive ? "active" : "")}>À Propos de Nous</NavLink>
                    <NavLink to="/condition-generale" className={({ isActive }) => (isActive ? "active" : "")}>Conditions Générales</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
                </nav>
                <div className="flex lg:hidden flex-row justify-center items-center cursor-pointer">
                    <button type="button" onClick={() => setState(true)}>
                        <IoMenu size={28} />
                    </button>
                </div>
            </div>

            {/* For the mobile navigation */}
            <div className={`${state ? "active" : ""} mobile-division flex lg:hidden flex-col justify-start items-center gap-6 px-12 py-10 bg-white`}>
                <div className="w-full flex flex-row justify-end items-center">
                    <button type="button" onClick={() => setState(false)} className="cursor-pointer">
                        <MdOutlinePlaylistRemove size={28} />
                    </button>
                </div>
                <h1 className="text-3xl font-bold">
                    <img className="h-16 rounded" src={LOGO} alt="LOGO" />
                </h1>

                <nav className="flex flex-col justify-evenly items-center gap-5">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Accueil</NavLink>
                    <NavLink to="/nos-voitures" className={({ isActive }) => (isActive ? "active" : "")}>Nos Voitures</NavLink>
                    <NavLink to="/a-propos" className={({ isActive }) => (isActive ? "active" : "")}>À Propos de Nous</NavLink>
                    <NavLink to="/condition-generale" className={({ isActive }) => (isActive ? "active" : "")}>Conditions Générales</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
                </nav>

                <div className="flex flex-col justify-evenly items-center gap-3">
                    <h3 className="text-xl">Suivez-nous:</h3><br />
                    <div className="flex flex-row justify-evenly items-center gap-3">
                        <Link to=""><FaFacebook size={19} /></Link>
                        <Link to=""><FaInstagram size={19} /></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
