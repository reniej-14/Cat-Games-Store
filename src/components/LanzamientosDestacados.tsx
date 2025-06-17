import { games } from "../data/games"
import Juego from "./Juego"

const eldenRingNightreign = games.filter(juego => juego.name === 'Elden Ring: Nightreign')[0]

const expedition33 = games.filter(juego => juego.name === 'Clair Obscur: Expedition 33')[0]

const doom = games.filter(juego => juego.name === 'DOOM: The Dark Ages')[0]

export default function LanzamientosDestacados() {
    return (
        <>
            <div className="max-w-[95%] md:max-w-6xl mx-auto px-2 mt-12">
                <h2 className="text-3xl font-bold">Lanzamientos Destacados</h2>

                <div className="my-6 flex flex-col gap-8 md:flex-row md:gap-0 md:justify-evenly">
                    <Juego
                        juego={expedition33}
                    />
                    <Juego
                        juego={eldenRingNightreign}
                    />
                    <Juego
                        juego={doom}
                    />
                </div>

                <h2 className="text-2xl font-bold mt-20">Los más vendidos</h2>

                <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-y-6">
                    {games.map(game => (
                        <Juego
                            juego={game}
                            key={game.name}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
