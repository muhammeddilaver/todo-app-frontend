import axios from "axios";

export const getTODOs = async () => {
    const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_ENDPOINT}/`
    );
    return data;
};

export const addTODO = async (todoName: string) => {
    const dataForm = {
        name: todoName,
    };

    const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_ENDPOINT}/`,
        dataForm
    );
    return data;
};

export const updateTODO = async (todoName: string, id: string) => {
    const dataForm = {
        name: todoName,
    };

    const { data } = await axios.put(
        `${import.meta.env.VITE_BASE_ENDPOINT}/${id}`,
        dataForm
    );
    return data;
};

export const deleteTODO = async (id: string) => {
    const { data } = await axios.delete(
        `${import.meta.env.VITE_BASE_ENDPOINT}/${id}`
    );
    return data;
};
