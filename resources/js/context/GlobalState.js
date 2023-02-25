import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
    clients: [],
    pagination: {},
    error: null,
    loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const getClients = async (page_url) => {
        try {
            page_url = page_url || "/api/v1/clients";
            const res = await axios.get(page_url);
            state.pagination = {
                current_page: res.data.meta.current_page,
                last_page: res.data.meta.last_page,
                next_page_url: res.data.links.next,
                prev_page_url: res.data.links.prev,
            };
            
            dispatch({
                type: "GET_CLIENTS",
                payload: res.data.data,
            });
        } catch (err) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: err.response.data.error,
            });
        }
    };

    // Actions
    const deleteClient = async (id) => {
        try {
            await axios.delete(`/api/v1/client/${id}`);
            getClients();
            dispatch({
                type: "DELETE_CLIENT",
                payload: id,
            });
        } catch (err) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: err.response.data.error,
            });
        }
    };

    // Actions
    const addClient = async (client) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            const res = await axios.post("/api/v1/client", client, config);
            getClients();
            dispatch({
                type: "ADD_CLIENT",
                payload: res.data.data,
            });
        } catch (err) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: err.response.data.error,
            });
        }
    };

    // Update
    const updateClient = async (client) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            const res = await axios.put("/api/v1/client", client, config);

            dispatch({
                type: "UPDATE_CLIENT",
                payload: res.data.data,
            });
        } catch (err) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: err.response.data.error,
            });
        }
    };

    return (
        <GlobalContext.Provider
            value={{
                clients: state.clients,
                pagination: state.pagination,
                error: state.error,
                loading: state.loading,
                getClients,
                deleteClient,
                addClient,
                updateClient,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
