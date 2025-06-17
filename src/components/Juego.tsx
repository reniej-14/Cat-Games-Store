import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


type JuegoProps = {
    juego: {
        name: string
        image: string
        description: string
        price_usd: number
    }
}

export default function Juego({juego} : JuegoProps) {

    const handleClick = () => {
        console.log(juego)
        toast.success(`${juego.name} agregado al carrito`)
    }

    return (
        <div 
            className="w-70 rounded-xl bg-white transition-transform duration-300 hover:scale-105 cursor-pointer mx-auto"
            onClick={handleClick}
        >
            <div>
                <img className="rounded-t-xl" src={juego.image} alt="imagen juego" />
            </div>

            <div className="p-3">
                <p className="font-semibold text-[18px]">{juego.name}</p>

                <p className="mt-2 text-[14px]">{juego.description}</p>

                <p className="mt-4 text-right font-medium text-[18px]">${juego.price_usd}</p>
            </div>
        </div>
    )
}
