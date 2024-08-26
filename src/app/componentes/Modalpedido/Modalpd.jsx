import React, { useState } from 'react'

export default function Modalpd({ abrir, cerrar, image, onSave }) {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [order, setOrder] = useState('')

    if (!abrir) return null

    const handleNameChange = (e) => setName(e.target.value)
    const handleAddressChange = (e) => setAddress(e.target.value)
    const handleOrderChange = (e) => setOrder(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        const orderData = {
            ...image,
            name,
            address,
            order,
        }
        onSave(orderData) // Pasa los datos del pedido a la función de guardado
        cerrar() // Cierra el modal después de guardar
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-5 rounded-lg shadow-lg max-w-lg w-full relative">
                <button 
                    onClick={cerrar} 
                    className="absolute top-2 right-2 text-gray-600">
                        X
                </button>
                <h2 className="text-lg font-semibold mt-4">{image.title}</h2>
                <p className="text-gray-600">{image.price}</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Dirección</label>
                        <input
                            type="text"
                            value={address}
                            onChange={handleAddressChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Pedido</label>
                        <input
                            type="text"
                            value={order}
                            onChange={handleOrderChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </div>
                    <div className="mt-4 flex justify-end">
                        <button 
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Confirmar Pedido
                        </button>
                        <button 
                            type="button"
                            onClick={cerrar} 
                            className="bg-gray-300 text-black px-4 py-2 rounded-lg ml-2 hover:bg-gray-400"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
