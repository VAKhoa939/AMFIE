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

export interface LoginUser {
  email: string;
  password: string;
}

export function defaultLoginUser(): LoginUser {
  return {
    email: "",
    password: "",
  };
}

const HANDLE_USER_URL = import.meta.env.VITE_API_URL + "/users";

export async function getUserList() {
  const res = await fetch(`${HANDLE_USER_URL}`);
  return await res.json();
}
