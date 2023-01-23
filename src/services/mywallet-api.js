import axios from "axios";

const apiRequests = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

const authConfig = (token) => ({
  headers: { "Authorization": `Bearer ${token}` }
});

export const signIn = ({ email, password }) => (
  apiRequests.post("/auth/sign-in", { email, password })
);

export const signUp = ({ name, email, password }) => (
  apiRequests.post("/users", { name, email, password })
);

export const signOut = (token) => (
  apiRequests.delete("/auth/sign-out", authConfig(token))
);

export const listTransactions = (token) => (
  apiRequests.get("/transactions", authConfig(token))
);
