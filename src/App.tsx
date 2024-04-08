import { useState, useEffect } from "react"
import { menuItems } from "./data/db"

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    setData(menuItems)
  },[])

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de propinas y Consumo</h1>
      </header>
      
      <main className="">
          <h2>Menu</h2>
      </main>

    </>
  )
}

export default App
