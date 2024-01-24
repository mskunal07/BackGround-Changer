import { useState } from "react"


function App() {

  const [color,setColor] = useState("wheat");
  return (
      <div className="w-full h-screen" style={{backgroundColor:color}} >
        <div className="flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-2">

            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-2xl">
              <button onClick={() => setColor("red")} className="outline-none rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"Red"}}>Red</button>
              <button onClick={() => setColor("green")} className="outline-none rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"Green"}}>Green</button>
              <button onClick={() => setColor("blue")} className="outline-none rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"Blue"}}>Blue</button>
              <button onClick={() => setColor("cyan")} className="outline-none rounded-full px-4 py-1 text-black shadow-lg" style={{backgroundColor:"Cyan"}}>Cyan</button>
              <button onClick={() => setColor("pink")} className="outline-none rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"Pink"}}>Pink</button>
              <button onClick={() => setColor("yellow")} className="outline-none rounded-full px-4 py-1 text-black shadow-lg" style={{backgroundColor:"Yellow"}}>Yellow</button>
            </div>

        </div>

      </div>
  )
}

export default App
