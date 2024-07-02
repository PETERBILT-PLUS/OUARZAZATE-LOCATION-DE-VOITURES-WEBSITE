import { FaPhoneAlt } from "react-icons/fa";
import "./Contact.css";

function Contact() {
    return (
        <section className="min-h-screen bg-slate-200 py-24">
            <div className="container mx-auto px-4">
                <h1 className="title text-3xl lg:text-4xl text-center pb-16">Contact</h1>
                <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-6 p-6">
                    <div className="flex flex-col justify-evenly w-full md:w-1/3 lg:w-1/4 rounded-lg border bg-white shadow px-4 pt-6 pb-12">
                        <h2 className="text-2xl md:text-3xl text-center pb-5 text-slate-700">Télephone</h2>
                        <div className="flex flex-row justify-center items-center">
                            <FaPhoneAlt size={24} color="#007BFF" />
                        </div>
                        <h3 className="text-xl text-center pt-10">0524884758</h3>
                    </div>
                    <div className="flex flex-col justify-evenly w-full md:w-1/3 lg:w-1/4 rounded-lg border bg-white shadow px-4 pt-6 pb-12">
                        <h2 className="text-2xl md:text-3xl text-center pb-5 text-slate-700">Télephone</h2>
                        <div className="flex flex-row justify-center items-center">
                            <FaPhoneAlt size={24} color="#007BFF" />
                        </div>
                        <h3 className="text-xl text-center pt-10">0524884758</h3>
                    </div>
                    <div className="flex flex-col justify-evenly w-full md:w-1/3 lg:w-1/4 rounded-lg border bg-white shadow px-4 pt-6 pb-12">
                        <h2 className="text-2xl md:text-3xl text-center pb-5 text-slate-700">Télephone</h2>
                        <div className="flex flex-row justify-center items-center">
                            <FaPhoneAlt size={24} color="#007BFF" />
                        </div>
                        <h3 className="text-xl text-center pt-10">0524884758</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
