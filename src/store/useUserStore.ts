import { UserStore } from '@/types/utils/store/user'
import { create } from 'zustand'

export const useUserStore = create<UserStore>()((set) => ({
  user: null,
  updateUser: (user) => set(() => ({ user })),
  removeUser: () => set({ user: null })
}))
