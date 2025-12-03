"use client";

import Link from "next/link";

export default function MobileMenu({ open, setOpen }: { open: boolean; setOpen: any; }) {
    if (!open) return null;

    return (
        <div className="md:hidden bg-white shadow-lg p-4 space-y-4 border-t">
            <Link href="/search" onClick={() => setOpen(false)}>Sök resa</Link>
            <Link href="/bookings" onClick={() => setOpen(false)}>Mina bokningar</Link>
            <Link href="/profile" onClick={() => setOpen(false)}>Min profil</Link>
            <Link href="/auth/login" onClick={() => setOpen(false)}>Logga in</Link>
        </div>
    );
}