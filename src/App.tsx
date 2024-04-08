import { useState } from "react"
import  {menuItems}  from "./data/db"
import MenuItem from "./components/MenuItem"
import useOrder from "./hooks/useOrder"

function App() {

  const [data, setData] = useState([])

  const { addItem } = useOrder()


  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto my-20 grid md:grid-cols-2">
          <div className="p-5">
              <h2 className="text-4xl font-black">Menú</h2>
              <div className="space-y-3 mt-10">
                    {menuItems.map(item => (
                      <MenuItem 
                        key={item.id}
                        item={item}
                        addItem={addItem}
                      />
                    ))}
              </div>
          </div>

          <div>
              <h2>Consumo</h2>
          </div>
      </main>

    </>
  )
}

export default App
