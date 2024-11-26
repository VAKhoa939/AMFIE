export interface User {
  picture?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber?: string;
  role?: string;
  position?: string;
  userid?: string;
  isActive?: boolean;
}

export function defaultUser(): User {
  return {
    name: "",
    email: "",
    password: "",
  };
}

const HANDLE_USER_URL = import.meta.env.VITE_API_URL + "/users";

export async function getUserList() {
  const res = await fetch(`${HANDLE_USER_URL}`);
  return await res.json();
}

export async function getUserById(id: string) {
  const res = await fetch(`${HANDLE_USER_URL}/${id}`);
  const data = await res.json();
  console.log(data);
  return data;
}

export async function createAsset(user: User) {
  const requestInit: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  const res = await fetch(`${HANDLE_USER_URL}`, requestInit);
  const data = await res.json();
  return data;
}

export async function updateAsset(id: string, user: User) {
  const requestInit: RequestInit = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  const res = await fetch(`${HANDLE_USER_URL}/${id}`, requestInit);
  const data = await res.json();
  console.log(data);
  return data;
}

export async function deleteAsset(id: string) {
  const requestInit: RequestInit = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(`${HANDLE_USER_URL}/${id}`, requestInit);
  const data = await res.json();
  return data;
}
