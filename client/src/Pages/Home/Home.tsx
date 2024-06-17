import BUISNESS from "../../assets/buisness.svg";
import "./Home.css";


function Home() {
    return (
        <div>
            <section className="py-16 first-section">
                <div className="container mx-auto px-4 flex flex-col items-center justify-start lg:items-start w-full">
                    <h1 className="text-white text-4xl">Bienvenue <span className="text-slate-100">Chez Nous</span></h1>
                    <br /><br />
                    <p className="lg:max-w-xl leading-7 text-white text-md">Votre solution idéale pour la location de voitures. Profitez d'une large gamme de véhicules pour tous vos besoins de déplacement, que ce soit pour des vacances, un voyage d'affaires, ou une simple escapade.</p>
                </div>
            </section>


            <section className="second-section py-14 bg-slate-100">
                <div className="container mx-auto flex flex-col-reverse justify-center items-center gap-10 lg:flex-row">
                    <div className="self-center">
                        <img src={BUISNESS} alt="Buisness image" className="h-80 w-80" />
                    </div>

                    <div className="w-full px-5 lg:w-1/3 xl:w-1/4 service-info mt-12 flex flex-col justify-center items-center">
                        <h1 className="text-3xl py-5 self-center lg:self-start">Notre Service</h1>
                        <p className="leading-6 ">Chez nous, nous offrons une large gamme de véhicules pour tous vos besoins de déplacement. Profitez de nos tarifs compétitifs, de notre assistance 24/7 et de notre système de réservation en ligne simple et rapide. Nos voitures sont bien entretenues pour garantir votre sécurité et votre confort.</p>
                    </div>
                </div>
            </section>

            <section className="third-section min-h-screen pt-20 bg-white">
                <h1 className="text-3xl pt-0 pb-20 text-center">Localisation</h1>

                <div className="w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3422.3074355659146!2d-6.921450124411693!3d30.933977074487814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDU2JzAyLjMiTiA2wrA1NScwOC4wIlc!5e0!3m2!1sfr!2sma!4v1717427663989!5m2!1sfr!2sma"
                        width="600"
                        height="450"
                        className="w-full"
                        style={{ border: "0" }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </section>
        </div>
    )
}

export default Home;