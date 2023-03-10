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

export const updateTransaction = ({ id, token, description, amountCents }) => (
  apiRequests.put(`/transactions/${id}`, { description, amountCents }, authConfig(token))
);

export const createTransaction = ({ token, description, amountCents }) => (
  apiRequests.post("/transactions", { description, amountCents }, authConfig(token))
);

export const deleteTransaction = ({ token, id }) => (
  apiRequests.delete(`/transactions/${id}`, authConfig(token))
);
