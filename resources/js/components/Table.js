import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { FaTrash, FaEdit } from "react-icons/fa";
import Modal from "./Modal";

const Table = () => {
    const { clients, getClients, deleteClient, pagination } =
        useContext(GlobalContext);

    const [isOpen, setIsOpen] = useState(false);
    const [dataClient, setDataClient] = useState("");

    const handleOpenModal = (client) => {
        setIsOpen(true);
        setDataClient(client);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        getClients();
    }, []);

    const cursor = {
        cursor: "pointer",
    };

    const colorFaTrash = {
        color: "red",
    };

    const colorFaEdit = {
        color: "blue",
    };

    return (
        <>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">Nome</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Genero</th>
                            <th scope="col">Idade</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client) => (
                            <tr className="text-center" key={client.id}>
                                <td>{client.name}</td>
                                <td>{client.tel}</td>
                                <td>{client.gender}</td>
                                <td>{client.age}</td>
                                <td>
                                    <FaEdit
                                        style={{ ...cursor, ...colorFaEdit }}
                                        onClick={() => handleOpenModal(client)}
                                    />
                                </td>
                                <td>
                                    <FaTrash
                                        style={{ ...cursor, ...colorFaTrash }}
                                        onClick={() => deleteClient(client.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <nav
                    aria-label="Page navigation example"
                    className="mt-4 d-flex justify-content-center"
                >
                    <ul className="pagination">
                        <li
                            className={`${
                                !pagination.prev_page_url ? "disabled" : ""
                            } page-item`}
                        >
                            <a
                                className="page-link"
                                href="#"
                                onClick={() =>
                                    getClients(pagination.prev_page_url)
                                }
                            >
                                Anterior
                            </a>
                        </li>
                        <li className="page-item disabled">
                            <a className="page-link text-dark" href="#">
                                Página {pagination.current_page} de{" "}
                                {pagination.last_page}
                            </a>
                        </li>
                        <li
                            className={`${
                                !pagination.next_page_url ? "disabled" : ""
                            } page-item`}
                        >
                            <a
                                className="page-link"
                                href="#"
                                onClick={() =>
                                    getClients(pagination.next_page_url)
                                }
                            >
                                Próximo
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                {/* <button onClick={handleOpenModal}>Abrir modal</button> */}
                <Modal
                    isOpen={isOpen}
                    dataClient={dataClient}
                    onClose={handleCloseModal}
                ></Modal>
            </div>
        </>
    );
};

export default Table;
