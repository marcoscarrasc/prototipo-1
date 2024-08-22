import { useEffect, useState } from "react";
import { Switch } from "@material-tailwind/react";

export default function TableComponent({ data, edit }) {
    const [switchStates, setSwitchStates] = useState({});

    useEffect(() => {
        const estados = {};
        data.forEach((elemento) => {
            estados[elemento.index] = elemento.enable || true;
        });
        setSwitchStates(estados);
    }, [data]);

    const handleSwitchChange = (id) => {
        setSwitchStates((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };



    

    return (
        <div className="p-4 mr-20 ml-20 ">
            <table className="w-full bg-white border ">
                <thead>
                    <tr className="bg-gray-100 text-gray-700 border-b border-gray-300 ">
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
                    {data.map((row) => (
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
                                    onClick={() => edit(row)}
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

        </div>
    );
}
