'use client'

import { useState } from "react";

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Implementa la lógica de búsqueda aquí
        console.log("Buscando:", searchTerm);
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <header className="bg-gray-900 text-white p-6 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-3xl font-bold tracking-tight">Rokycito’s</h1>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href="#" className="text-gray-300 hover:text-lime-500 transition">Inicio</a></li>
                            <li><a href="Comida" className="text-gray-300 hover:text-lime-500 transition">Menú</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-lime-500 transition">Sobre Nosotros</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-lime-500 transition">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className=" grid grid-cols-3 items-center justify-center text-center py-16 px-4 bg-gradient-to-br from-orange-400 via-red-400 to-yellow-400">
               
               
                <div className="flex items-center justify-center ">
                    <img src="https://cdn.cuponidad.pe/images/Deals/polloalalenalinceofertas.jpg" alt="imagen" width={300} height={400} className="rounded-3xl shadow-lg shadow-black h-64 transition-opacity  duration-100 ease-in-out hover:opacity-80" />
                </div>

                <div className="p-8 mb-12 rounded-lg bg-white shadow-lg max-w-lg mx-auto">
                    
                    
                    <h2 className="text-5xl font-extrabold text-gray-900 mb-6">¡Bienvenido a Rokycito’s!</h2>
                    <p className="text-lg text-gray-700 mb-8">Descubre los sabores más deliciosos y frescos con nuestra selección gourmet.</p>



                    <form onSubmit={handleSearch} className="relative w-full max-w-md mx-auto">
                        <input
                            type="text"
                            placeholder="Buscar ..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-4 pr-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                        />
                        <button
                            type="submit"
                            className="absolute inset-y-0 right-0 flex items-center pr-4"
                        >

                        </button>
                    </form>
                </div >

                <div className="flex items-center justify-center "  >
                    <img src="https://revistatourgourmet.com/wp-content/uploads/2022/12/carta-carnes.jpg" alt="parrilla"
                        width={300} height={300} className="rounded-3xl shadow-lg shadow-black transition-opacity  duration-300 ease-in-out hover:opacity-80 h-64" />
                </div>
            </main>

            <footer className="bg-gray-900 text-gray-300 p-4 text-center">
                <p>&copy; 2024 Rokycito’s. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}
