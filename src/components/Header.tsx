export default function Header() {
    return (
        <header className="w-full bg-white shadow-md">
            <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
                
                {/* LOGO */}
                <h1 className="text-xl font-bold text-blue-600">
                    TryggResa
                </h1>

                {/* NAVIGATION LINKS */}
                <ul className="hidden md:flex items-center gap-6 text-gray-700">
                    <li className="hover:text-blue-600 transition">Hem</li>
                    <li className="hover:text-blue-600 transition">Sök resa</li>
                    <li className="hover:text-blue-600 transition">Bokningar</li>
                    <li className="hover:text-blue-600 transition">Profil</li>
                </ul>

                {/* MOBILE MENU BUTTON */}
                <button className="md:hidden text-gray-700 text-2xl">
                    ☰
                </button>

            </nav>
        </header>
    );
}
