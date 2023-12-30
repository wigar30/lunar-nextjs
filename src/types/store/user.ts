import type { Role } from "./role"

export type UserStore = {
  user: User | null
  updateUser: (user: User) => void
  removeUser: () => void
}

export type User = {
  id: string
  email: string
  name: string
  roleId: string
  role: Role
  statusId: string
  membership: string
}