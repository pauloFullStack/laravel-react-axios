// import React from "react";
import Form from "./Form";

const Modal = ({ isOpen, onClose, dataClient }) => {
    if (!isOpen) {
        return null;
    }

    const modalOverlay = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const modal = {
        position: "relative",
        background: "#fff",
        borderRadius: "4px",
        padding: "16px",
        width: "500px",
        height: "auto",
        overflowY: "auto",
    };

    const closeButton = {
        position: "absolute",
        top: "8px",
        right: "8px",
        border: "none",
        background: "transparent",
        fontSize: "24px",
        cursor: "pointer",
    };

    return (
        <div style={modalOverlay}>
            <div style={modal}>
                <button style={closeButton} onClick={onClose}>
                    x
                </button>
                <Form
                    column1="col-lg-12 mt-3"
                    column2="col-lg-12 mt-3"
                    column3="col-lg-12 mt-3"
                    column4="col-lg-12 mt-3"
                    text="Editar Cliente"
                    method="put"
                    nameForm={dataClient.name}
                    telForm={dataClient.tel}
                    ageForm={dataClient.age}
                    genderForm={dataClient.gender_id}
                    idForm={dataClient.id}
                />
            </div>
        </div>
    );
};

export default Modal;
