import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Form = ({
    column1,
    column2,
    column3,
    column4,
    text,
    method,
    nameForm,
    telForm,
    genderForm,
    ageForm,
    idForm,
}) => {
    const [name, setName] = useState(nameForm ? nameForm : "");
    const [tel, setTel] = useState(telForm ? telForm : "");
    const [gender_id, setGender] = useState(genderForm ? genderForm : "");
    const [age, setAge] = useState(ageForm ? ageForm : "");
    const [id, setId] = useState(idForm ? idForm : "");
    const [col1, setCol1] = useState(column1);
    const [col2, setCol2] = useState(column2);
    const [col3, setCol3] = useState(column3);
    const [col4, setCol4] = useState(column4);
    const [typeMethod, setTypeMethod] = useState(method);

    const { addClient, updateClient } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newClient = {
            id: id ? id : null,
            name,
            tel,
            gender_id,
            age,
        };

        if (name === "" || tel === "" || gender_id === "" || age === "") {
            alert("Preencha todos os campos");
            return;
        }

        if (typeMethod === "post") {
            addClient(newClient);
        } else if (typeMethod === "put") {
            updateClient(newClient);
        }
    };

    return (
        <div className="container mb-4">
            <div className="mt-3 mb-2">
                <h3>{text}</h3>
            </div>
            <form onSubmit={onSubmit}>
                <input type="hidden" value={id} />
                <div className="row">
                    <div className={col1}>
                        <label className="form-label" htmlFor="text">
                            Nome
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nome"
                        />
                    </div>
                    <div className={col2}>
                        <label className="form-label" htmlFor="amount">
                            Telefone
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}
                            placeholder="Telefone"
                        />
                    </div>
                    <div className={col3}>
                        <label className="form-label" htmlFor="amount">
                            Genero
                        </label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            value={gender_id}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option select="true" value="">
                                Selecione
                            </option>
                            <option value="2">Masculino</option>
                            <option value="1">Feminino</option>
                            <option value="3">Outros</option>
                        </select>
                    </div>
                    <div className={col4}>
                        <label className="form-label" htmlFor="amount">
                            Idade
                        </label>
                        <input
                            className="form-control"
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="Telefone"
                        />
                    </div>
                </div>
                <div className="mt-4 d-flex justify-content-end">
                    <button type="submit" className="btn btn-outline-primary">
                        Salvar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
