import { create } from "zustand";
import { uid } from "uid";
import { persist } from 'zustand/middleware'

export const useArtPiecesInfo = create(
  persist(
    (set) => ({
      comments: [],
      addComment: (comment, slug) =>
        set((state) => ({
          comments: [
          { slug: slug, text: comment, id: uid() },
            ...state.comments,
          ]
        })),
      removeComment: (id) =>
        set((state) => ({
          comments: state.comments.filter((comment) => comment.id !== id),
        }))
    }),
    {
      name: 'pieces-info',
    }
  )
)