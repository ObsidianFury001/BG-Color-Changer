import { useState } from 'react';
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

function App() {
  const [bgColor, setbgColor] = useState("#0f172a");

  const HandleChange  = (event) => { 
    let newColor = event.target.value;
    newColor ? setbgColor(newColor) : setbgColor("#0f172a");
  }

  const GenerateRandomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let temp = `rgb(${r}, ${g}, ${b})`;
    return temp;
  }

  const randomizeColor = (color) => { setbgColor(GenerateRandomColor()) }

  return (
    <>
      <div className='w-full h-screen p-4 
                      transition-[background-color] duration-500' 
      style={{backgroundColor: bgColor}}>
        
        <h1 className='md:text-2xl sm:text-lg text-center text-sky-200
                      md:w-1/2 sm:w-full 
                      py-2 mx-auto
                     bg-[#0f172a] rounded-xl
                      drop-shadow-md shadow-blue-800 font-semibold'>
          BG Color Changer
        </h1>
        <div className='flex flex-wrap justify-center 
                        fixed bottom-8 left-0 right-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3
                          shadow-lg p-3 rounded-xl
                          bg-white'>
            <button className='bg-indigo-700 text-white md:text-xl sm:text-lg 
                                 shadow-lg shadow-gray-500 hover:shadow-blue-300 rounded-xl
                                 transition-all duration-500 ease-in-out
                                 px-4 py-1'
                    onClick={() => setbgColor("rgb(67 56 202 / 1)")}>Blue</button>
            <button className='bg-red-700 text-white md:text-xl sm:text-lg 
                                 shadow-lg shadow-gray-500 hover:shadow-red-400 rounded-xl
                                 transition-all duration-500 ease-in-out
                                 px-4 py-1 '
                    onClick={() => setbgColor("rgb(185 28 28 /1)")}>Red</button>
            <button className='bg-orange-400 text-white md:text-xl sm:text-lg 
                                 shadow-lg shadow-gray-500 hover:shadow-orange-400 rounded-xl
                                 transition-all duration-500 ease-in-out
                                 px-4 py-1'
                    onClick={() => setbgColor("rgb(251 146 60 / 1)")}>Orange</button>
            <input type="text" className='px-2
                         bg-white border border-slate-300
                         text-gray-800
                         placeholder-slate-400 
                         w-24
                         shadow-lg shadow-gray-400 rounded-xl
                         outline-none
                         hover:border-slate-400 
                         focus:border-blue-600 focus:ring-blue-500 focus:ring-1
                         transition-all duration-300 ease-in-out'
                    onChange={HandleChange}
                    placeholder="#1FFACC" maxLength="7" />
            <button className='bg-slate-950 text-gray-200 md:text-xl sm:text-lg 
                                 shadow-lg shadow-gray-500 hover:shadow-gray-500 rounded-xl
                                 transition-all duration-500 ease-in-out
                                 flex justify-center items-center
                                 px-6 py-1'                    
                    onClick={() => randomizeColor()}>
              <span>Randomize</span>&nbsp;<GiPerspectiveDiceSixFacesRandom size="2em" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
