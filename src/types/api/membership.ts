import type { Role } from './role'
import type { Tenant } from './tenant'

export type Membership = {
  id: string
  userId: string
  roleId: string
  role: Role
  tenant: Tenant
}
