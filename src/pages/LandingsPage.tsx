import heroImage from "../assets/landingpage.jpg";

export default function LandingPage() {
    return (
        <section className="relative w-full h-[500px] md:h-[600px] white">
            
            {/* Text ovanpå bilden */}
            <div className="text-center py-4 px-4">
                <h1 className="text-xl md:text-5xl font-bold text-black mb-1">
                    Enkel och trygg bokning av färdtjänst & sjukresor
                </h1>
                <p className="text-lg md:text-xl text-black mb-6">
                    För äldre och personer och personer med funktionsnedsättning
                    boka din resa - snabbt och enkelt.
                </p>
            </div>
            
            {/* Bakgrundsbild */}
            <img 
                src={heroImage} 
                alt="Landingpage backgrundsbild"
                className="absolute inset-0 w-full h-full object-contain" 
            />
            
            
        </section>
    );
}