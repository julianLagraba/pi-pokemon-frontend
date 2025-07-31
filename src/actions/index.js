import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export function getPokemons() {
    return async function(dispatch) {
        var json = await axios.get(`${API}/pokemons`);
        return dispatch({
            type: "GET_POKEMONS",
            payload: json.data
        });
    }
}

export function getTypes() {
    return async function(dispatch) {
        var json = await axios.get(`${API}/types`);
        return dispatch({
            type: "GET_TYPES",
            payload: json.data
        });
    }
}

export function postPokemon(payload) {
    return async function(dispatch) {
        console.log(payload);
        const json = await axios.post(`${API}/pokemons`, payload);
        return json;
    }
}

export function searchBar(payload) {
    return async function(dispatch) {
        console.log(payload);
        try {
            var json = await axios.get(`${API}/pokemons?name=` + payload);
            return dispatch({
                type: "SEARCH",
                payload: json.data
            });
        } catch(error) {
            console.log(error);
        }
    }
}

export function filterPokemonsByType(payload) {
    return {
        type: 'FILTER_BY_TYPE',
        payload
    };
}

export function filterCreated(payload) {
    return {
        type: 'FILTER_CREATED',
        payload
    };
}

export function getDetail(id) {
    return async function(dispatch) {
        try {
            console.log(id);
            var json = await axios.get(`${API}/pokemons/` + id);
            return dispatch({
                type: "GET_DETAILS",
                payload: json.data
            });
        } catch(error) {
            console.log(error);
        }
    }
}

export const orderName = (payload) => {
    return {
        type: "ORDER_NAME",
        payload
    };
};