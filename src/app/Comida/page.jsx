'use client'

import React, { useState, useEffect } from 'react'
import Modal from '../componentes/Modalpedido/Modalpd'
import OrderBoard from '../componentes/Tablapedido'
import imagen from '../db/Imagen.json'

export default function ImageComponent() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [orders, setOrders] = useState([]) // Estado para manejar los pedidos guardados
    const [images, setImages] = useState()
    useEffect(() => {
        setImages(imagen)
    }, [])

    const openModal = (image) => {
        setSelectedImage(image)
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setSelectedImage(null)
        setModalIsOpen(false)
    }

    const handleSaveOrder = (orderData) => {
        setOrders([...orders, orderData]); // Añade el nuevo pedido a la lista de pedidos
    }

    return (

        <div className="flex flex-col h-screen">

            <div className="p-5 bg-blue-gray-300 flex-grow">
                <span className="text-4xl font-bold text-white bg-gradient-to-r bg-clip-text text-transparent py-4 px-6 rounded-lg  text-center uppercase">comida rapida</span>

                <div className="grid grid-cols-3 gap-4 p-4">
                    {images?.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => openModal(image)}
                            className="relative border-none p-0 cursor-pointer overflow-hidden rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
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
