'use client'
import Table from "../componentes/Table"
import ModalEdit from "../componentes/Modal/ModalEditar"
import { Button } from "@material-tailwind/react"
import Modal from "../componentes/Modal/ModalAdd"
import { useState } from "react"
import { database } from "../db/datos"


export default function () {
    const [tematicos, setTematicos] = useState(database)
    const [tematicoToUpdate, setTematicoToUpdate] = useState(null)
    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const openModal = () => setIsModalCreateOpen(true);
    const closeModal = () => setIsModalCreateOpen(false);
    const openEditModal = () => setIsModalEditOpen(true);
    const closeEditModal = () => setIsModalEditOpen(false);

    const onCreate = (tematico) => {
        console.log(tematico)
        setTematicos(prevState => ([...prevState, tematico]))
        closeModal();

    }

    const onUpdate = (tematico) => {
        const tematicosUpdated = tematicos.map((item) =>
            item.id === tematico.id ? tematico : item
        );
        setTematicos(tematicosUpdated);
        closeEditModal();
    }

    const handleEdit = (tematico) => {

        setTematicoToUpdate(tematico);
        openEditModal();

    };

    return (
        <>
            <h1 className="text-center text-3xl p-6">Mantenimiento de tematicos</h1>
            <div className="flex justify-end mr-24 mt-24 ">
                <Button onClick={openModal} color="amber">Agregar</Button></div>
            <Table data={tematicos} edit={handleEdit}></Table>
            <Modal isOpen={isModalCreateOpen} onClose={closeModal} onSave={onCreate}></Modal>
            <ModalEdit isOpen={isModalEditOpen}  onClose={closeEditModal} onUpdate={onUpdate} data={tematicoToUpdate} ></ModalEdit>
        </>
    )
}
