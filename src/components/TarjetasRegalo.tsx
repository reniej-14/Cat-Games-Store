import { giftCard } from "../data/games"
import Juego from "./Juego"

export default function TarjetasRegalo() {

    const xbox = giftCard.filter(item => item.platform === 'Xbox')
    const playstation = giftCard.filter(item => item.platform === 'PlayStation')
    const steam = giftCard.filter(item => item.platform === 'Steam')

    return (
        <div className="max-w-[95%] md:max-w-6xl mx-auto px-2 mt-12">

            <div>
                <h2 className="text-2xl font-bold">Xbox</h2>

                <div className="my-6 flex flex-col gap-8 md:flex-row md:gap-0 md:justify-evenly">
                    {xbox.map(item => (
                        <Juego
                            juego={item}
                            key={item.name}
                        />
                    ))}
                </div>
            </div>
            
            <div>
                <h2 className="text-2xl font-bold">PlayStation</h2>

                <div className="my-6 flex flex-col gap-8 md:flex-row md:gap-0 md:justify-evenly">
                    {playstation.map(item => (
                        <Juego
                            juego={item}
                            key={item.name}
                        />
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold">Steam</h2>

                <div className="my-6 flex flex-col gap-8 md:flex-row md:gap-0 md:justify-evenly">
                    {steam.map(item => (
                        <Juego
                            juego={item}
                            key={item.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
