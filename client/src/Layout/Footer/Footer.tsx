import { NavLink } from "react-router-dom";
import LOGO from "../../assets/LOGO.png";
import "./Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";


function Footer() {
    return (
        <footer className="footer  py-16 min-h-80 w-full">
            <div className="h-full container mx-auto flex flex-col lg:flex-row justify-between items-center">
                {/* First Division */}
                <div className="h-full lg:w-1/4 flex px-5 lg:px-0 flex-col justify-start items-center mb-8 lg:mb-0">
                    <img src={LOGO} className="h-24 rounded" alt="LOGO" />
                    <br /><br />
                    <p className="leading-6 text-slate-100">Contactez-nous pour toute demande de renseignements.<br /> Nous sommes là pour répondre à vos questions et vous aider à trouver<br /> la voiture parfaite pour votre prochain voyage.</p>
                </div>

                {/* Second Division */}
                <div className="lg:w-1/4 flex flex-col justify-start items-center mb-8 lg:mb-0" style={{ height: "100%" }}>
                    <h2 className="text-xl font-semibold mb-4 text-slate-100">Liens Rapides</h2>
                    <ul>
                        <li className="text-center lg:text-start py-1"><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Accueil</NavLink></li>
                        <li className="text-center lg:text-start py-1"><NavLink to="/nos-voitures" className={({ isActive }) => (isActive ? "active" : "")}>Nos Voitures</NavLink></li>
                        <li className="text-center lg:text-start py-1"><NavLink to="/a-propos" className={({ isActive }) => (isActive ? "active" : "")}>À Propos de Nous</NavLink></li>
                        <li className="text-center lg:text-start py-1"><NavLink to="/conditions" className={({ isActive }) => (isActive ? "active" : "")}>Conditions Générales</NavLink></li>
                        <li className="text-center lg:text-start py-1"><NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink></li>
                    </ul>
                </div>

                {/* Third Division */}
                <div className="lg:w-1/4 flex flex-col justify-start items-center mb-8 lg:mb-0" style={{ height: "100%" }}>
                    <h2 className="text-xl font-semibold mb-4 text-slate-100">Contactez-nous</h2>
                    <p className="text-slate-100 py-1">Adresse: N 463 Lot elmassira - Ouarzazate</p>
                    <p className="text-slate-100 py-1">Téléphone: 05 24 88 47 58</p>
                    <p className="text-slate-100 py-1">Email: Yourlocation80@gmail.com</p>
                </div>

                {/* Fourth Division */}
                <div className="lg:w-1/4 flex flex-col justify-start items-center">
                    <h2 className="text-xl font-semibold mb-4 text-slate-100">Suivez-nous</h2>
                    <div className="flex flex-row justify-evenly items-center gap-3">
                        <a href="https://www.facebook.com/Your.Locationn?mibextid=LQQJ4d" target="_blank"><FaFacebook size={19} /></a>
                        <a href="https://www.instagram.com/yourlocation_ouarzazate?igsh=cXNta21rYnR5OG03" target="_blank"><FaInstagram size={19} /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;