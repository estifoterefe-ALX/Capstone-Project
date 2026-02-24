// import { create } from "zustand"
// const useAuthor = create((set, get) => ({
//     userInfo: {
//         id: "",
//         usename: "",
//         name: "",
//         img: ""
//     },
//     isLoggedIn: false,
//     favoriteList: [],
//     watchList: [],
//     addSingleFavoriteList: (favoriteItem) => {
//         set((state) => ({
//             favoriteList: [...state.favoriteList, favoriteItem]
//         }))
//     },
//     addFavoriteList: (favoriteItems) => {
//         set(() => ({
//             favoriteList: favoriteItems
//         }))
//     },
//     removeFavoriteList: (id) => {
//         set((state) => {
//             const item = state.favoriteList.filter((item) => item.id !== id)
//             return { favoriteList: item }
//         })
//     },
//     addUserInfo: (user) => {
//         set(() => ({
//             userInfo: {
//                 id: user.id,
//                 username: user.username,
//                 name: user.name,
//                 img: user.img
//             }
//         }))
//     },
//     removeUserInfo: () => {
//         set(() => ({
//             userInfo: {
//                 id: '',
//                 username: '',
//                 name: '',
//                 img: ""
//             }
//         }))
//     },
//     addSingleWatchList: (watchitem) => {
//         set((state) => ({
//             watchList: [...state.watchList, watchitem]
//         }))
//     },
//     addWatchList: (watchitems) => {
//         set(() => ({
//             watchList: watchitems
//         }))
//     },
//     removeWatchList: (id) => {
//         set((state) => {
//             const item = state.watchList.filter((item) => item.id !== id)
//             return { watchList: item }
//         })
//     },
//     setLogIn: () => {
//         set((state) => ({
//             isLoggedIn: !state.isLoggedIn
//         }))
//     }
// }))
// export default useAuthor

import { create } from "zustand"

const useAuthor = create((set) => {
  const listActions = (key) => ({
    [`add${key}`]: (item) => set((state) => ({ [key]: [...state[key], item] })),
    [`set${key}`]: (items) => set({ [key]: items }),
    [`remove${key}`]: (id) => set((state) => ({ [key]: state[key].filter(i => i.id !== id) })),
  })

  return {
    userInfo: { id: "", username: "", name: "", img: "" },
    isLoggedIn: false,
    favoriteList: [],
    watchList: [],

    // Named actions for each list
    ...listActions("favoriteList"),
    ...listActions("watchList"),

    // User info
    setUserInfo: (user) =>
      set({ userInfo: { id: user.id, username: user.username, name: user.name, img: user.img } }),
    clearUserInfo: () =>
      set({ userInfo: { id: "", username: "", name: "", img: "" } }),

    // Login
    logIn: () => set({ isLoggedIn: true }),
    logOut: () => set({ isLoggedIn: false }),
  }
})

export default useAuthor