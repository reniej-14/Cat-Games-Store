import { software } from "../data/games"
import Juego from "./Juego"

export default function SoftwareMicrosoft() {

    return (
        <div className="max-w-[95%] md:max-w-6xl mx-auto px-2 mt-12">

            <div>
                <h2 className="text-2xl font-bold">Windows y Office</h2>

                <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-y-6">
                    {software.map(item => (
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
