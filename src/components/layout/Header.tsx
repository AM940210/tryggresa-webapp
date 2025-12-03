"use client";

import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
            <div className="flex items-center justify-between px-4 h-16">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/images/logo.png" alt="TryggResa" width={32} />
                    <span className="font-bold text-lg">TryggResa</span>
                </Link>

                <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Open menu">
                    <span className="text-2xl">☰</span>
                </button>

                <nav className="hidden md:flex gap-6 text-grayText">
                    <Link href="/search">Sök resa</Link>
                    <Link href="/bookings">Mina bokningar</Link>
                    <Link href="/profile">Min profil</Link>
                </nav>
            </div>

            <MobileMenu open={open} setOpen={setOpen} />
        </header>
    )
}