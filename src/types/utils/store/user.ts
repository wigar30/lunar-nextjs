import { User } from '../../api/user'

export type UserStore = {
  user: User | null
  updateUser: (user: User) => void
  removeUser: () => void
}
