import { create } from "zustand"
import type { Juego } from "./types"

export type Store = {
    carrito: Juego[]
    agregarJuego: (juego: Juego) => void
}

export const useAppStore = create<Store>((set, get) => ({
    carrito: [],
    agregarJuego: (juego: Juego) => {
        if (get().carrito.some(game => game.name === juego.name)) {
            console.log('Este juego ya fue agregado')
            return
        }
        set({
            carrito: [...get().carrito, juego]
        })
        console.log(get().carrito)
    }
}))