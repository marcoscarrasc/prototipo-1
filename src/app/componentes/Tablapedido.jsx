import React from 'react';

export default function OrderBoard({ orders }) {
    return (
        <div className="p-5 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Pedidos Guardados</h1>
            <div className="grid grid-cols-1 gap-4">
                {orders.length === 0 ? (
                    <p>No hay pedidos guardados.</p>
                ) : (
                    orders.map((order, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            <img src={order.src} alt={order.alt} className="w-48 h-48 rounded-lg mb-2" />
                            <h2 className="text-lg font-semibold">{order.title}</h2>
                            <p className="text-gray-600">{order.price}</p>
                            <div className="mt-4">
                                <p><strong>Nombre:</strong> {order.name}</p>
                                <p><strong>Dirección:</strong> {order.address}</p>
                                <p><strong>Detalles del Pedido:</strong> {order.order}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
