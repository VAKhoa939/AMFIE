export interface IUser {
  picture?: string,
  name: string,
  email: string,
  password: string,
  phoneNumber?: string,
  role?: string,
  position?: string,
  userid?: string,
  isActive?: boolean
}

export function defaultUser(): IUser {
  return {
    name: "",
    email: "",
    password: ""
  }
}

export interface ILoginUser {
  email: string,
  password: string
}

export function defaultLoginUser(): ILoginUser {
  return {
    email: "",
    password: ""
  }
}