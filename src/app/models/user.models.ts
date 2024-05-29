
// INTERFACE FOR GLOBAL USER
export interface User {
  email: string
  id: string,
  firstname: string
  lastname: string
  role?: UserRole
  createdAt?: string
  updatedAt?: string
}


// EXPORT INTERFACE FOR LOGIN PAGE
export interface IUser{
  email: string,
  password: string,
}

// EXPORT USER ROLE ENUMS FOR MONGOOSE SCHEMA
export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  CLIENT = 'CLIENT',
  AGENT = 'AGENT',
}
