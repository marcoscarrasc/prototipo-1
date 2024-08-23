'use client'
import React, { useState, useEffect } from 'react';
import tematicos_db from '../db/tematicos.json';
import Button from '../componentes/Button';
import Historial from '../componentes/Historial';


const ThematicSelector = () => {
    const [inputs, setInputs] = useState(['', '', '', '', '', '']);
    const [options, setOptions] = useState([[], [], [], [], [], []]);
    const [histories, setHistories] = useState([])

    useEffect(() => {

        const newOptions = [
            [...new Set(tematicos_db.map(t => t.quiebre))],
            [], [], [], [], []
        ];
        setOptions(newOptions);
    }, []);

    const handleInputChange = (index, value) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);

        let filteredData = tematicos_db;

        // Filtrar datos basados en las selecciones actuales
        for (let i = 0; i <= index; i++) {
            if (newInputs[i] !== '') {
                filteredData = filteredData.filter(t => Object.values(t)[i] === newInputs[i]);
            }
        }

        // Actualizar opciones para los siguientes dropdowns
        const newOptions = [...options];
        for (let i = index + 1; i < 6; i++) {
            const key = Object.keys(tematicos_db[0])[i];
            newOptions[i] = [...new Set(filteredData.map(t => t[key]))];
        }

        setOptions(newOptions);

        // Limpiar selecciones posteriores
        setInputs(prev => [...prev.slice(0, index + 1), ...Array(5 - index).fill('')]);

        // Autocompletar si todas las selecciones están hechas
        if (index === 3) {
            const matchingThematic = filteredData[0];
            if (matchingThematic) {
                setInputs([
                    newInputs[0],
                    newInputs[1],
                    newInputs[2],
                    matchingThematic.subNivel,
                    matchingThematic.estado,
                    matchingThematic.tiempoRetorno.toString()
                ]);
            }
        }
    };
    const handleSave = () => {
        setHistories(prev => [...prev, { miliseconds: new Date().getTime(), time: new Date().toLocaleDateString() + " -> " + new Date().toLocaleTimeString(), values: inputs }]); // Agregar datos al historial
        setInputs(['', '', '', '', '', ''])
        console.log('Datos guardados:', inputs);
    };

    return (
        <main className='flex flex-col justify-center items-center gap-10'>
            <div className='w-full justify-center items-center flex flex-col gap-6'>
                <h1>Selector de Temáticos</h1>
                <div>
                    <select
                        key={0}
                        value={inputs[0]}
                        onChange={(e) => handleInputChange(0, e.target.value)}
                        disabled={false}
                    >
                        <option value="">Seleccione una opción</option>
                        {options[0].map((option, optionIndex) => (
                            <option key={optionIndex} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>

                {/* <DivWithTitle title={"Prueba"} /> */}
                <div className=' justify-center items-center grid grid-cols-3 gap-4'>
                    {inputs.map((input, index) => index > 0 && (
                        <div className={`w-full p-4 border-gray-200 border-2 ${index < 4 ? 'bg-blue-100' : 'bg-gray-100'} shadow-lg`} key={index}>
                            <h3 className='uppercase mb-2 text-gray-700 font-semibold'>
                                {Object.keys(tematicos_db[0])[index]}
                            </h3>

                            <select className='bg-white w-64 text-sm'
                                key={index}
                                value={input}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                disabled={index > 3 || (index > 0 && inputs[index - 1] === '')}
                            >

                                <option value="">Seleccione una opción</option>
                                {options[index].map((option, optionIndex) => (
                                    <option key={optionIndex} value={option}>
                                        {option}
                                    </option>
                                ))}

                            </select>


                        </div>


                    ))}

                    <div className='grid grid-cols-1 border-spacing-1 h-24 border-gray-200 border-2 bg-gray-50 shadow-lg'>
                        <span className='uppercase'>observacion</span>
                        <input type="text" className='h-10 bg-blue-gray-500' />
                    </div>
                </div>


            </div>
            <Button title="Guardar" onClick={handleSave} />

            <Button title="Limpiar" onClick={e => { setHistories([]) }} />
            <Historial data={histories} />
        </main>
    );
};



export default ThematicSelector;