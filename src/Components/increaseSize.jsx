import { useState } from "react";
import './increaseSize.css'


function SizeDiv() {
    const [width,setWidth] = useState(80);
    
    const increaseSize = () => {
        setWidth(prevWidth => prevWidth + 10);
    }
    return <div className="container1">
         Increase width or height  when click
            <div className="main1" onClick={increaseSize} style={{width:`${width}px`, height:`${width}px`}}>
                    
            </div>
    </div>
    
}
export default SizeDiv;