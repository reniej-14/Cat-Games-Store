import Juego from "./Juego"

type valorFiltroProps = {
    valorFiltro: ({
        name: string;
        image: string;
        description: string;
        price_usd: number;
        studio: string;
    } | {
        name: string;
        image: string;
        description: string;
        price_usd: number;
        platform: string;
    })[]
}

export default function ItemFiltrado({valorFiltro} : valorFiltroProps) {

    return (
        <>
            <div className="max-w-[95%] md:max-w-6xl mx-auto px-2 mt-12">
                <div>
                    <h2 className="text-2xl font-bold">Resultados:</h2>
            
                    <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-y-6">
                        {valorFiltro.map(item => (
                            <Juego
                                juego={item}
                                key={item.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
