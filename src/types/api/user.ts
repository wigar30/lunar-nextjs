import { Role } from './role'

export type User = {
  id: string
  email: string
  name: string
  roleId: string
  role: Role
  statusId: string
  membership: string
}
