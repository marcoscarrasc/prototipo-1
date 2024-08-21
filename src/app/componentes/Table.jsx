import { database } from "../db/datos";
import { Switch, Button } from "@material-tailwind/react";

export default function TableComponent() {
    return (
        <>
            <div className="flex justify-end"> <Button color="amber">Guadar</Button></div>
            <table>
                <thead>
                    <tr>
                        <th>Quiebre</th>
                        <th>Motivo</th>
                        <th>Submotivo</th>
                        <th>SubNivel</th>
                        <th>Estado</th>
                        <th>TiempoRetorno</th>
                        <th>Quiebre derivacion</th>
                        <th>Tipo atencion</th>
                        <th>Accion</th>
                        <th>Habilitar o Deshabilitar</th>
                    </tr>
                </thead>
                <tbody>
                    {database.map((row, index) => (
                        <tr key={index}>
                            <td>{row.quiebre}</td>
                            <td>{row.motivo}</td>
                            <td>{row.subMotivo}</td>
                            <td>{row.subNivel}</td>
                            <td>{row.estado}</td>
                            <td>{row.tiempoRetorno}</td>
                            <td>xx</td>
                            <td>xx</td>
                            <td><button className="bg-red-200">editar</button></td>
                            <td>  <Switch color="blue" defaultChecked /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
