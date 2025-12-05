import logo from "../assets/logo.png";
import { Search, User, Languages } from "lucide-react";


export default function Header() {
    return (
        <header className="w-full bg-white shadow-md">
            <nav className="max-w-6xl mx-auto flex items-center justify-between pt-1 ps-1 pb-4">
                
                {/* LOGO */}
                <div className="flex items-center gap-2">
                    <img src={logo} alt="TryggResa logo" className="h-20 w-auto" />
                </div>

                {/* NAVIGATION LINKS */}
                <div className="hidden md:flex items-center gap-6 text-gray-700">
                    
                    {/* Vänster meny */}
                    <ul className="flex items-center gap-6">
                        <li className="font-bold hover:text-blue-600">MINA BOKNINGAR</li>
                        <li className="font-bold hover:text-blue-700">MIN PROFIL</li>
                        <li className="font-bold hover:text-blue-700">KUNDSERVICE</li>
                    </ul>
            
                    {/* separator */}
                    <div className="w-px h-12 bg-gray-400 mx-6"></div>
                    
                    {/* Höger meny */}
                    <ul className="flex items-center gap-6">
                        <li className="hover:text-blue-600 transition flex items-center">
                            <span className="pr-2 flex items-center">
                                <Search size={18} /> 
                            </span>
                            Sök
                        </li>
                        <li className="hover:text-blue-600 transition flex items-center">
                            <span className="pr-2 flex items-center">
                                <User size={18} />
                            </span>
                            Logga in
                        </li>
                        <li className="hover:text-blue-600 transition flex items-center">
                            <span className="pr-2 flex items-center">
                                <Languages size={18} />
                            </span>
                            English
                        </li>
                    </ul>
                </div>
                

                {/* MOBILE MENU BUTTON */}
                <button className="md:hidden text-gray-700 text-2xl">
                    ☰
                </button>

            </nav>
        </header>
    );
}
