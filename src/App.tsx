import { useState } from "react"
import Header from "./components/Header"
import LanzamientosDestacados from "./components/LanzamientosDestacados"
import TarjetasRegalo from "./components/TarjetasRegalo"
import SoftwareMicrosoft from "./components/SoftwareMicrosoft"
import { games, giftCard, software } from "./data/games"
import ItemFiltrado from "./components/ItemFiltrado"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [seleccion, setSeleccion] = useState('games')
  const [busqueda, setBusqueda] = useState('')

  const handleChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
    setSeleccion(e.target.value)
  }

  const contenidoBusqueda = [...games, ...giftCard, ...software]

  const valorFiltro = contenidoBusqueda.filter(item => item.name.toLocaleLowerCase().includes(busqueda.toLowerCase()))

  return (
    <>
      <Header
        setBusqueda={setBusqueda}
      />
      <div className="text-center mt-5 text-gray-600">
        <select 
          className=" cursor-pointer bg-white p-2 shadow rounded-md"
          onChange={handleChange}
        >
          <option value="games">Juegos</option>
          <option value="giftCards">Tarjetas de regalo</option>
          <option value="software">Software</option>
          </select>
      </div>
      
      {busqueda ? <ItemFiltrado
        valorFiltro={valorFiltro}
      /> 
      : (
        <>
          {seleccion === "games" && <LanzamientosDestacados/>}
          {seleccion === "giftCards" && <TarjetasRegalo/>}
          {seleccion === "software" && <SoftwareMicrosoft/>}
        </>
        )
      }
      <ToastContainer/>
    </>
  )
}

export default App
