'use client'
import Table from "../componentes/Table"
import ModalEdit from "../componentes/Modal/ModalEditar"
import { Button } from "@material-tailwind/react"
import Modal from "../componentes/Modal/ModalAdd"
import { useState } from "react"
import { database } from "../db/datos"


export default function () {
    const [tematicos, setTematicos] = useState(database)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    const onCreate = (tematico) => {

        setTematicos(prevState => ([...prevState, tematico]))
       
    
      }

     const onEdit =(tematico)=>{
        setTematicos(prevState => ([...prevState, tematico]))
     } 


    return (
        <>
            <h1 className="text-center text-3xl p-6">Mantenimiento de tematicos</h1>
            <div className="flex justify-end"> <Button onClick={openModal} color="amber">Agregar</Button></div>
            
            <Table data={tematicos} ></Table>
            <Modal isOpen={isModalOpen} onClose={closeModal} onSave={onCreate}></Modal>
            <ModalEdit isOpen={isModalOpen} onClose={closeModal} onEdit={onEdit} ></ModalEdit>
        </>
    )
}
