import api from "../lib/api";

export const loginUser = async (email, password) => {
    const { data } = await api.post("/login", { email, password });
    return data;
};

export const registerUser = async (userData) => {
    const { data } = await api.post("/register", userData);
    return data;
};

export const logoutUser = async () => {
    await api.post("/logout");
};

export const checkSession = async () => {
    const { data } = await api.post("/refresh");
    return data;
};
