
'use client'
export default function Historial({data}) {

    return (
        <>
            <table className="bg-gray-100 border-2 border-gray-300">
                <thead>
                   <tr>
                    <th>Quiebre</th>
                    <th>Motivo</th>
                    <th>Submotivo</th>
                    <th>Subnivel</th>
                    <th>Estado</th>
                    <th>Tiempo</th>
                    <th>Observacion</th>
                   </tr>
                </thead>
                <tbody>
                    {data.sort( (a,b) => b.miliseconds - a.miliseconds ).map(({miliseconds,time,...restProps}) => (
                        <tr>
                            {restProps.values.map(value => (
                                <td className="p-2 text-center border-2 border-blue-200">
                                    {value}
                                </td>
                            ))}
                        </tr>
                    ))}

                </tbody>

            </table>

        </>


    )
}