import { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X, Search, User, Globe, Languages, Home, CalendarCheck, HelpCircle } from "lucide-react";


export default function Header() {

    const [open, setOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-md">
            <nav className="max-w-6xl mx-auto flex items-center justify-between pt-1 ps-1 pb-4">
                
                {/* LOGO */}
                <div className="flex items-center gap-2">
                    <img src={logo} alt="TryggResa logo" className="h-20 w-auto" />
                </div>

                {/* DESKTOP MENY */}
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
                <button 
                    className="md:hidden text-gray-700 text-2xl pr-6"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={48} /> : <Menu size={48}/>}
                </button>
            </nav>

            {/* MOBILE DROPDOWN */}
            {open && (
                <div className="md:hidden bg-white shadow-md border-t">
                    <ul className="items-center gap-2">
                        <li className="flex items-center gap-2 px-6 py-3 bg-neutral-200 text-2xl font-medium mb-0.5 hover:border hover:border-blue-600 transition">
                            <span className="pr-4 flex items-center">
                                <Home size={40} />
                            </span>
                            Hem
                        </li>
                        <li className="flex items-center gap-2 px-6 py-3 bg-neutral-200 text-2xl font-medium mb-0.5 hover:border hover:border-blue-600 transition">
                            <span className="pr-4 flex items-center">
                                <Search size={40} />
                            </span>
                            Sök resa
                        </li>
                        <li className="flex items-center gap-2 px-6 py-3 bg-neutral-200 text-2xl font-medium mb-0.5 hover:border hover:border-blue-600 transition">
                            <span className="pr-4 flex items-center">
                                <User size={40}/>
                            </span>
                            Logga in / Registera dig
                        </li>
                        <li className="flex items-center gap-2 px-6 py-3 bg-neutral-200 text-2xl font-medium mb-2 hover:border hover:border-blue-600 transition">
                            <span className="pr-4 flex items-center">
                                <HelpCircle size={40}/>
                            </span>
                            Hjälp
                        </li>
                        <li className="flex items-center gap-2 px-6 py-3 bg-neutral-200 text-2xl font-medium hover:border hover:border-blue-600 transition">
                            <span className="pr-4 flex items-center">
                                <Globe size={40}/>
                            </span>
                            Switch to English
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
