import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthStore {
  isAuthenticated: boolean;
  adminName: string | null;
  login: (password: string) => boolean;
  logout: () => void;
}

const ADMIN_PASSWORD = 'carpo2024';

export const useAuth = create<AuthStore>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      adminName: null,
      login: (password) => {
        if (password === ADMIN_PASSWORD) {
          set({ isAuthenticated: true, adminName: 'Administrador Grupo Carpo' });
          return true;
        }
        return false;
      },
      logout: () => set({ isAuthenticated: false, adminName: null }),
    }),
    {
      name: 'grupo-carpo-auth',
    }
  )
);
