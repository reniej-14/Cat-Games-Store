import type { Dispatch, SetStateAction } from "react"
import { Link } from "react-router-dom"


type busquedaProps = {
    setBusqueda: Dispatch<SetStateAction<string>>
}

export default function Header({setBusqueda} : busquedaProps) {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBusqueda(e.target.value)
    }

    const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
    }

    return (
        <header className="bg-white shadow-md">
            <div className="flex items-center justify-between max-w-[95%] md:max-w-6xl mx-auto p-2">
                <div className="w-16 md:w-25">
                    <Link to={'/'}>
                        <img src="catgames.svg" alt="imagen logo"/>
                    </Link>
                    
                </div>

                <form className="flex gap-2 ">
                    <input 
                        type="text" 
                        placeholder="Buscar..."
                        className="p-1 px-6 md:p-2 md:px-6 bg-gray-100 rounded-4xl max-w-34 md:max-w-[229px]"
                        onChange={onChange}
                    />
                    <button 
                        className="transition-transform duration-300 hover:scale-125"
                        onClick={onClick}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 md:size-7 hover:cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </form>

                <div className="flex gap-4 md:gap-20 font-medium">
                    <Link to="/carrito" className="transition-transform duration-300 hover:scale-125">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 md:size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </Link>
                    <a href="#" className="transition-transform duration-300 hover:scale-125">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 md:size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </a>
                </div>
            </div>

        </header>
    )
}
