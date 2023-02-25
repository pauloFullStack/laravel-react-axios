import React from "react";
import Header from "./Header";
import Form from "./Form";
import Table from "./Table";
import { GlobalProvider } from "../context/GlobalState";

const App = () => {
    return (
        <>
            <GlobalProvider>
                <Header />
                <Form
                    column1="col-lg-6 mt-3"
                    column2="col-lg-3 mt-3"
                    column3="col-lg-2 mt-3"
                    column4="col-lg-1 mt-3"
                    text="Adicionar Cliente"
                    method="post"
                />
                <Table />
            </GlobalProvider>
        </>
    );
};

export default App;
