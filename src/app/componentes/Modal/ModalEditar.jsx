import { useState, useEffect } from "react";
import { QUIEBRES_OPTIONS, QUIEBREDERIVACION_OPTIONS, TIPO_ATENCION } from "../../../constants";

export default function Modal({ isOpen, onClose, onUpdate, data}) {
    const [id,setId] = useState("")
    const [quiebre, setQuiebre] = useState("");
    const [motivo, setMotivo] = useState("");
    const [subMotivo, setSubMotivo] = useState("");
    const [subNivel, setSubNivel] = useState("");
    const [estado, setEstado] = useState("PENDIENTE");
    const [tiempoRetorno, setTiempoRetorno] = useState(0);
    const [quiebrederivacion, setQuiebrederivacion] = useState("");
    const [tipoatencion, setTipoAtencion] = useState("");

    useEffect(() => {
        if (data) {
            setId(data.id || "");
            setQuiebre(data.quiebre || "");
            setMotivo(data.motivo || "");
            setSubMotivo(data.subMotivo || "");
            setSubNivel(data.subNivel || "");
            setEstado(data.estado || "PENDIENTE");
            setTiempoRetorno(data.tiempoRetorno || 0);
            setQuiebrederivacion(data.quiebrederivacion || "");
            setTipoAtencion(data.tipoatencion || "");
        }
    }, [data]);

    if (!isOpen) return null;

    const handleClose = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const onModific = () => {
        onUpdate({
            id,
            quiebre: quiebre.toUpperCase(),
            motivo: motivo.toUpperCase(),
            estado,
            subMotivo: subMotivo.toUpperCase(),
            subNivel: subNivel.toUpperCase(),
            tiempoRetorno,
            quiebrederivacion,
            tipoatencion,
            habilitado: true
        });


    };



    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleClose}
        >
            <div
                className="bg-blue-50 w-4/5 md:w-3/4 lg:w-1/2 h-auto p-6 rounded relative grid gap-6"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-2 right-2 bg-red-700 text-white p-2 rounded"
                    onClick={onClose}
                    aria-label="Cerrar modal"
                >
                    X
                </button>

                <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Quiebre</label>
                        <select
                            name="quiebres"
                            value={quiebre}
                            onChange={(e) => setQuiebre(e.target.value)}
                            className="w-full p-2 border rounded"
                        >
                            <option value="">Selecciona un quiebre</option>
                            {QUIEBRES_OPTIONS?.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Motivo</label>
                        <input
                            type="text"
                            value={motivo}
                            onChange={(e) => setMotivo(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Submotivo</label>
                        <input
                            type="text"
                            value={subMotivo}
                            onChange={(e) => setSubMotivo(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subnivel</label>
                        <input
                            type="text"
                            value={subNivel}
                            onChange={(e) => setSubNivel(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                        <select
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                            className="w-full p-2 border rounded"
                        >
                            <option value="CERRADO">CERRADO</option>
                            <option value="PENDIENTE">PENDIENTE</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tiempo de Retorno</label>
                        <input
                            type="number"
                            min={0}
                            max={48}
                            value={tiempoRetorno}
                            onChange={(e) => setTiempoRetorno(Number(e.target.value))}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Quiebre de Derivación</label>
                        <select
                            value={quiebrederivacion}
                            onChange={(e) => setQuiebrederivacion(e.target.value)}
                            className="w-full p-2 border rounded"
                        >
                            <option value="">Selecciona una opción</option>
                            {QUIEBREDERIVACION_OPTIONS?.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Atención</label>
                        <select
                            value={tipoatencion}
                            onChange={(e) => setTipoAtencion(e.target.value)}
                            className="w-full p-2 border rounded"
                        >
                            <option value="">Selecciona una opción</option>
                            {TIPO_ATENCION?.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="mt-6">
                    <button onClick={onModific} className="bg-blue-500 text-white p-2 rounded w-full">
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    );
}
