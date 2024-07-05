import "./APropos.css";


function APropos() {
    return (
        <section className="bg-slate-100 py-24 min-h-screen">
            <div className="container mx-auto px-4">

                <h1 className="text-2xl md:text-3xl lg:text-4xl text-center lg:text-start pb-10">À Propos de Nous</h1>

                <p className="leading-6 text-gray-700 pb-6">Bienvenue sur notre site de location de voitures, votre partenaire de confiance pour tous vos besoins de mobilité. Depuis notre création, nous nous sommes engagés à fournir des services de location de véhicules de haute qualité, adaptés à chaque type de déplacement, que ce soit pour des voyages d'affaires, des vacances en famille, ou des escapades de week-end.</p>

                <p className="leading-6 text-gray-700 pb-6">
                    Notre entreprise se distingue par son large éventail de véhicules modernes et bien entretenus, allant des citadines économiques aux luxueuses berlines, en passant par les robustes SUV et les véhicules utilitaires. Chaque véhicule de notre flotte est régulièrement inspecté et entretenu pour garantir une performance optimale et une sécurité maximale sur la route.
                </p>

                <p className="leading-6 text-gray-700 pb-6">
                    Merci de choisir <mark>Your Location</mark> pour vos besoins de location de voitures. Nous sommes impatients de vous servir et de vous accompagner dans tous vos déplacements.
                </p>
            </div>
        </section>
    )
}

export default APropos;