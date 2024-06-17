import { useFetchCars } from "../../hooks/fetchCars";
import "./NosVoitures.css";


function NosVoitures() {
    const { data, loading, error } = useFetchCars();

    if (loading) {
        return (
            <div className="min-h-screen flex flex-row justify-center items-center">
                <span className="inline-block w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-row justify-center items-center">
                <p>Error: {error.message}</p>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-slate-100">
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-8">Nos Voitures</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {data.map(car => (
                            <div key={car.id} className="card bg-white flex flex-col justify-between items-start shadow-lg rounded-lg overflow-hidden h-96 md:h-auto">
                                <img
                                    src={`http://localhost:1337${car.attributes.carImage.data.attributes.url}`}
                                    alt={car.attributes.carTitle}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-2xl font-semibold mb-2">{car.attributes.carTitle}</h2>
                                    <p className="text-gray-700 mb-4">{car.attributes.carDescription[0].children[0].text}</p>
                                    <p className="text-blue-500 font-bold mb-4">Prix: {car.attributes.pricePerDay} DH</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NosVoitures;
