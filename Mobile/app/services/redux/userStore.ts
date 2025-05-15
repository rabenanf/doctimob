import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../../data/dto/User'; // ta classe User

type UserStore = {
    user: User | null;
    setUser: (userData: User) => void;
    updateUser: (newData: Partial<User>) => void;
    setPhone: (phone: string) => void;
    setEmail: (email: string) => void;
    setRole: (role: string) => void;
    setPassword: (password: string) => void;
    logout: () => void;
};

const useUserStore = create<UserStore>()(
    persist(
        (set, get) => ({
            user: {},

            setUser: (userData) => { user: userData },

            updateUser: (newData) =>
                set((state) => ({
                    user: { ...state.user, ...newData },
                })),

            setPhone: (phone) =>
                set((state) => ({
                    user: { ...state.user, phone },
                })),

            setEmail: (email) =>
                set((state) => ({
                    user: { ...state.user, email },
                })),

            setRole: (role) =>
                set((state) => ({
                    user: { ...state.user, role },
                })),

            setPassword: (password) =>
                set((state) => ({
                    user: { ...state.user, password },
                })),

            logout: () => set({ user: null }),
        }),
        {
            name: 'user-storage',
            storage: createJSONStorage(() => AsyncStorage),
            partialize: (state) => ({
                user: state.user ? state.user : null,
            }),
            onRehydrateStorage: () => (state) => {
                if (state?.user) {
                    state.user = state.user;
                }
            },
        }
    )
);

export default useUserStore;

