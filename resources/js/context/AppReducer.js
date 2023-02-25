export default (state, action) => {
    switch (action.type) {
        case "GET_CLIENTS":
            return {
                ...state,
                loading: false,
                clients: action.payload,
            };
        case "DELETE_CLIENT":
            return {
                ...state,
                clients: state.clients.filter(
                    (client) => client.id !== action.payload
                ),
            };
        case "ADD_CLIENT":
            return {
                ...state,
                clients: [action.payload, ...state.clients],
            };
        case "UPDATE_CLIENT":
            return {
                ...state,
                clients: state.clients.map(
                    (client) => client.id === action.payload.id ? action.payload : client
                ),
            };
        case "TRANSACTION_ERROR":
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
