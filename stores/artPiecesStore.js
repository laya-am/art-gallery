import { create } from "zustand";
import { persist } from 'zustand/middleware'

// export const useArtPiecesStore = create((set) => ({
//   pieces: [],
//   setPieces: (pieces) => {
//     set((state) => {
//       return { pieces: pieces };
//     });
//   },
// }));

export const useArtPiecesStore = create(
  persist(
    (set) => ({
      pieces: [],
      setPieces: (pieces) => {
        set(() => {
          return { pieces: pieces };
        });
      },
    }),
    {
      name: 'pieces-storage',
    }
  )
)