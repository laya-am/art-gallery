import { create } from "zustand";
import { persist } from 'zustand/middleware'

export const useArtPiecesStore = create(
  persist(
    (set) => ({
      pieces: [],
      setPieces: (pieces) => set({ pieces }),
    }),
    {
      name: 'pieces-storage',
    }
  )
)