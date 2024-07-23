import { useState } from "react"


function Light() {

    const [Color, setColor] = useState("")
    
    // handle on button

    const handleOnButton = () => {
        setColor(true)
    }
    const handleOfButton = () => {
        setColor(false)
    }

    return <dev>
    
    <div>
        
        <div style={{backgroundColor: Color === true ? "yellow" : ""}} className="rounded-full w-[400px] h-[400px] border-4 border-sky-500 sm:ml-[400px]"></div>

        <div>
        <button style={{ backgroundColor: Color === true ? "Blue" : "" }}  onClick={handleOnButton}  className= "bg-red-500 w-[140px] h-[40px] text-white text-2xl  hover:bg-white hover:border-[2px]
         hover:border-solid hover:border-black hover:text-black mx-10 my-10 border-4 border-red-500 sm:ml-[390px] rounded"> on </button>
        
        
        <button style={{ backgroundColor: Color === false ? "Blue" : " " }}  onClick={handleOfButton} className="bg-red-500 w-[140px] h-[40px] text-white text-2xl hover:bg-white hover:border-[2px] 
        hover:border-solid hover:border-black mx-10 my-10 border-4 hover:text-black ml-[20px] sm:ml-[60px] rounded">of</button>
    </div>

    </div>
    </dev>
}

export default Light