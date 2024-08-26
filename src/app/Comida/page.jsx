'use client'

import { useState, useEffect } from 'react'
import Modal from '../componentes/Modalpedido/Modalpd'
import OrderBoard from '../componentes/Tablapedido'
import imagen from '../db/Imagen.json'
import imagen1 from '../db/Imagen1.json'

export default function ImageComponent() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [orders, setOrders] = useState([]) // Estado para manejar los pedidos guardados
    const [images, setImages] = useState()
    const [images1, setImages1] = useState()
    useEffect(() => {
        setImages(imagen)
        setImages1(imagen1)

    }, [])

    const openModal = (image, image1) => {
        setSelectedImage(image, image1)
        setModalIsOpen(true)
    }


    const closeModal = () => {
        setSelectedImage(null)
        setModalIsOpen(false)
    }

    const handleSaveOrder = (orderData) => {
        setOrders([...orders, orderData]) // Añade el nuevo pedido a la lista de pedidos
    }

    return (

        <div className="flex flex-col h-screen">

            <div className="p-5 bg-brown-100 flex-grow">
                <span className="text-4xl font-bold text-black bg-gradient-to-r bg-clip-text  py-4 px-6 rounded-lg  text-center uppercase">parrillas</span>

                <div className="grid grid-cols-3 gap-4 p-4">
                    {images?.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => openModal(image)}
                            className="relative border-none p-0 cursor-pointer overflow-hidden rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg   duration-300 ease-in-out hover:opacity-80"
                        >
                            <img
                                src={image.src}
                                className="w-full h-72 rounded-lg transition-transform transform hover:rotate-3 hover:scale-110"
                                alt={image.alt}
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                                {image.title} {image.price}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex flex-col h-screen">
                <div className="p-5 bg-brown-100 flex-grow">
                    <span className="text-4xl font-bold text-black bg-gradient-to-r bg-clip-text  py-4 px-6 rounded-lg  text-center uppercase">pollo a la brasa</span>
                    <div className="grid grid-cols-3 gap-4 p-4" >
                        {images1?.map((image1, index) => (
                            <button
                                key={index}
                                onClick={() => openModal(image1)}
                                className="relative border-none p-0 cursor-pointer overflow-hidden rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg   duration-300 ease-in-out hover:opacity-80"
                            >
                                <img
                                    src={image1.src}
                                    className="w-full h-72 rounded-lg transition-transform transform hover:rotate-3 hover:scale-110"
                                    alt={image1.alt}
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                                    {image1.title} {image1.price}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {selectedImage && (
                <Modal
                    abrir={modalIsOpen}
                    cerrar={closeModal}
                    image={selectedImage}
                    onSave={handleSaveOrder} // Pasa la función de guardar al modal
                />
            )}

            <OrderBoard orders={orders} /> {/* Muestra el tablero de pedidos */}
        </div>

    )
}
