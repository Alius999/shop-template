import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useFavoritesItemsStore = create(
    persist(
        (set, get) => ({
            favoritesItems: [],

            addFavoriteItem: (item) => set(
                (state) => state.favoritesItems.some((i) => Number(i.id) === Number(item.id))
                ? state
                : { favoritesItems: [...state.favoritesItems, { ...item, id: Number(item.id) }] },
                // console.log(state.favoritesItems)
            ),

            removeFavoriteItem: (payload) => set(
                (state) => { 
                    const id = Number(typeof payload === 'object' ? payload.id : payload)
                    return ({
                        favoritesItems: state.favoritesItems.filter((i) => Number(i.id) !== id)
                    })
                },
                // console.log(get(state))
            ),
            
            toggleFavoriteItem: (item) => {
                if (get().favoritesItems.some((i) => Number(i.id) === Number(item.id))) {
                    get().removeFavoriteItem(Number(item.id));
                } else {
                    get().addFavoriteItem({ ...item, id: Number(item.id) });
                }
            },
        }),

        {
            name: 'favorites-items',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export const useCartItemsStore = create(
    persist(
        (set, get) => ({
            cartItems: [],

            addToCart: (item) => set((state) => {
                if (state.cartItems.some((i) => Number(i.id) === Number(item.id))) {   
                return state;
                } else {
                    return ({ cartItems: [...state.cartItems, { ...item, id: Number(item.id) }] })
                }
            }),

            removeFromCart: (payload) => set((state) => {
                const id = Number(typeof payload === 'object' ? payload.id : payload)
                return({
                    cartItems: state.cartItems.filter((i) => i.id !== id)                
                })
            }),

            toggleCartItem: (item) => {
                if (get().cartItems.some((i) => i.id === Number(item.id))) {
                    get().removeFromCart(Number(item.id));
                } else {
                    get().addToCart({ ...item, id: Number(item.id) });
                }
            },

            changeQuantity: (id, newQuantity) => set((state) => {
                return({
                    cartItems: state.cartItems.map((item) => item.id === id ? { ...item, quantity: Number(newQuantity) } : item)
                })
            }),

            coupon: null,
            applayCupon: (promocode) => {
                if (promocode === 'SaleMe10') {
                    set(() => ({
                        coupon: { value: 'SaleMe10', discount: 10 }
                    }))
                } else {
                    set(() => ({
                        coupon: null
                    }))
                }
            }
        }),


        {
            name: 'cart-items',
            storage: createJSONStorage(() => localStorage),
        }
    )
)
