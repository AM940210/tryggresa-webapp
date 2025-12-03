export default function LandingPage() {
    return (
        <div className="text-center pt-10">
            <h1>Välkommen till TryggResa</h1>
            <p className="mt-2 text-grayText">
                En enklare och tryggare väg att boka sjukresa och färdtjänst.
            </p>

            <div className="mt-8 space-y-4">
                <a 
                    href="/search"
                    className="block bg-primary text-white py-3 rounded-lg font-semibold"
                >
                    Sök resa utan konto
                </a>

                <a 
                    href="/auth/login"
                    className="block border border-primary py-3 rounded-lg font-semibold"
                >
                    Logga in & boka
                </a>
            </div>
        </div>
    );
}