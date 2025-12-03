import "./../styles/globals.css";
import Header from "../components/layout/Header";

export const metadata = {
    title: "TryggResa",
    description: "Enkel bokning av sjukresa och färdtjänst",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="sv">
            <body className="min-h-screen">
                <Header />
                <main className="mt-16 px-4">{children}</main>
            </body>
        </html>
    );
}