import { create } from "zustand";
import { uid } from "uid";
import { persist } from 'zustand/middleware'

// export const useArtPiecesInfo = create((set) => ({
//   commentsBySlug: { cool: [], blah: [{ text: "my comment" }] },
//   addComment: (slug, comment) => {
//     comment.id = uid();
//     set(({ commentsBySlug }) => {
//       if (!commentsBySlug[slug]) {
//         const copy = { ...commentsBySlug };
//         copy[slug] = [comment];
//         return { commentsBySlug: copy };
//       } else {
//         const copy = { ...commentsBySlug };
//         copy[slug] = [...copy[slug], comment];
//         return { commentsBySlug: copy };
//       }
//     });
//   },
// }));

export const useArtPiecesInfo = create(
    persist(
        (set) => ({
            commentsBySlug: { makes: [], noSense: [{ text: "my comment" }] },
            addComment: (slug, comment) => {
              comment.id = uid();
              set(({ commentsBySlug }) => {
                if (!commentsBySlug[slug]) {
                  const copy = { ...commentsBySlug };
                  copy[slug] = [comment];
                  return { commentsBySlug: copy };
                } else {
                  const copy = { ...commentsBySlug };
                  copy[slug] = [...copy[slug], comment];
                  return { commentsBySlug: copy };
                }
              })
            }
        }),
        {
            name: 'pieces-info-storage',
        }
    )
)