import { useEffect, useState } from "react";
import { Switch } from "@material-tailwind/react";
import ModalEdit from "./Modal/ModalEditar"

export default function TableComponent({ data, save }) {
    const [tableData, setTableData] = useState(data);
    const [switchStates, setSwitchStates] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        const estados = {};
        tableData.forEach((elemento) => {
            estados[elemento.id] = elemento.enable || false;
        });
        setSwitchStates(estados);
    }, [tableData]);

    const handleSwitchChange = (id) => {
        setSwitchStates((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const openModal = (rowData) => {
        setEditData(rowData);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditData(null);
    };

    const guardar=()=>{}
    const handleEdit = (updatedData) => {
        const updatedTableData = tableData.map((item) =>
            item.id === updatedData.id ? updatedData : item
        );
        setTableData(updatedTableData);
        guardar(updatedData); 
        closeModal();
    };

    return (
        <div className="p-4">
            <table className="w-full bg-white border border-gray-300 rounded-lg shadow-sm">
                <thead>
                    <tr className="bg-gray-100 text-gray-700 border-b border-gray-300">
                        {/* Cabeceras de la tabla */}
                        <th className="p-2 text-left text-sm">Quiebre</th>
                        <th className="p-2 text-left text-sm">Motivo</th>
                        <th className="p-2 text-left text-sm">Submotivo</th>
                        <th className="p-2 text-left text-sm">SubNivel</th>
                        <th className="p-2 text-left text-sm">Estado</th>
                        <th className="p-2 text-left text-sm">Tiempo Retorno</th>
                        <th className="p-2 text-left text-sm">Quiebre Derivación</th>
                        <th className="p-2 text-left text-sm">Tipo Atención</th>
                        <th className="p-2 text-left text-sm">Acción</th>
                        <th className="p-2 text-left text-sm">Habilitar o Deshabilitar</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {tableData.map((row) => (
                        <tr key={row.id} className="hover:bg-gray-50 transition-colors duration-200">
                            <td className="p-2 text-sm">{row.quiebre}</td>
                            <td className="p-2 text-sm">{row.motivo}</td>
                            <td className="p-2 text-sm">{row.subMotivo}</td>
                            <td className="p-2 text-sm">{row.subNivel}</td>
                            <td className="p-2 text-sm">{row.estado}</td>
                            <td className="p-2 text-sm">{row.tiempoRetorno}</td>
                            <td className="p-2 text-sm">{row.quiebrederivacion}</td>
                            <td className="p-2 text-sm">{row.tipoatencion}</td>
                            <td className="p-2 text-sm">
                                <button
                                    onClick={() => openModal(row)}
                                    className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-150 text-xs"
                                >
                                    Editar
                                </button>
                            </td>
                            <td className="p-2 text-sm">
                                <Switch
                                    checked={switchStates[row.id] || false}
                                    onChange={() => handleSwitchChange(row.id)}
                                    color="blue"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
                <ModalEdit
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onEdit={handleEdit}
                    data={editData}
                />
            )}
        </div>
    );
}
